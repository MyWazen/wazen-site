'use client'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
	NextButton,
	PrevButton,
	usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { Img } from '@/components/Img'
import { clean, cn } from '@/lib/utils'
import style from './embla.module.css'
import {
	PortableText,
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from 'next-sanity'

const TWEEN_FACTOR_BASE = 0.12

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max)

type PropType = {
	slides: Sanity.Testimonial[]
	options?: EmblaOptionsType
	locale?: string
}

const components: PortableTextComponents = {
	types: {
		block: ({ value }: PortableTextTypeComponentProps<any>) => {
			return (
				<p className="text-larger mx-auto max-w-3xl font-semibold text-cyan-950 md:max-w-3xl">
					{value.children
						.map((child: any) => {
							// check if there are quotation marks in the testimonial text and add them if not
							return child.text.includes(`"`) ? child.text : `"${child.text}"`
						})
						.join('')}
				</p>
			)
		},
	},
}

const EmblaCarousel: React.FC<PropType> = ({
	slides,
	options,
	locale = 'en',
}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
	const tweenFactor = useRef(0)
	const tweenNodes = useRef<HTMLElement[]>([])

	const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
		tweenNodes.current = emblaApi
			.slideNodes()
			.map((slideNode) => slideNode.querySelector('.slide-item') as HTMLElement)
	}, [])

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
	}, [])

	const tweenScale = useCallback(
		(emblaApi: EmblaCarouselType, eventName?: string) => {
			const engine = emblaApi.internalEngine()
			const scrollProgress = emblaApi.scrollProgress()
			const slidesInView = emblaApi.slidesInView()
			const isScrollEvent = eventName === 'scroll'

			emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				engine.slideRegistry[snapIndex].forEach((slideIndex) => {
					if (isScrollEvent && !slidesInView.includes(slideIndex)) return
					let diffToTarget = scrollSnap - scrollProgress

					if (engine.options.loop) {
						engine.slideLooper.loopPoints.forEach((loopItem) => {
							const target = loopItem.target()

							if (slideIndex === loopItem.index && target !== 0) {
								diffToTarget =
									scrollSnap + Math.sign(target) * (1 - scrollProgress)
							}
						})
					}

					const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
					const scale = numberWithinRange(tweenValue, 0, 1).toString()
					tweenNodes.current[slideIndex].style.transform = `scale(${scale})`
				})
			})
		},
		[],
	)

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi)

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi)

	useEffect(() => {
		if (!emblaApi) return

		setTweenNodes(emblaApi)
		setTweenFactor(emblaApi)
		tweenScale(emblaApi)

		emblaApi
			.on('reInit', setTweenNodes)
			.on('reInit', setTweenFactor)
			.on('reInit', tweenScale)
			.on('scroll', () => tweenScale(emblaApi, 'scroll'))
			.on('slideFocus', tweenScale)

		return () => {
			emblaApi.off('reInit', setTweenNodes)
			emblaApi.off('reInit', setTweenFactor)
			emblaApi.off('reInit', tweenScale)
			emblaApi.off('scroll', tweenScale)
			emblaApi.off('slideFocus', tweenScale)
		}
	}, [emblaApi, setTweenNodes, setTweenFactor, tweenScale])

	const carouselSlides = useMemo(
		() =>
			slides.map(({ content, author }, index) => (
				<div className={cn(style.embla__slide, 'embla__slide')} key={index}>
					<div
						className={cn(
							style.slide_item,
							`slide-item flex h-full flex-col items-center justify-center gap-8 rounded-2xl border border-gray-100 bg-teal-100 px-(--padding-horizontal--main) py-(--size--4rem) text-center transition-all`,
						)}
					>
						<PortableText value={content} components={components} />
						<div className="flex flex-row gap-4">
							<Img
								loading="lazy"
								image={author?.image}
								className="aspect-square size-10 rounded-full object-cover object-top-left"
							/>
							<div
								className={cn(
									'flex flex-col text-start text-sm text-cyan-950',
									author?.image && 'asset' in author?.image
										? 'items-start'
										: 'items-center',
								)}
							>
								{author && (
									<>
										<p className="font-medium">{clean(author.name)}</p>
										<p className="text-cyan-950/60">
											{author?.title && clean(author.title)}
										</p>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			)),
		[slides],
	)

	return (
		<div
			className={cn(style.embla, 'embla fluid-gap flex flex-col')}
			dir={locale === 'en' ? 'ltr' : 'rtl'}
		>
			<div
				className={cn(style.embla__viewport, 'embla__viewport')}
				ref={emblaRef}
			>
				<div className={cn(style.embla__container, 'embla__container')}>
					{carouselSlides}
				</div>
			</div>

			<div
				className="mx-auto flex w-full max-w-xs flex-row justify-between md:max-w-md lg:max-w-lg"
				dir={locale == 'en' ? 'ltr' : 'rtl'}
			>
				<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
				<div className={style.embla__dots}>
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={`${style.embla__dot} ${index === selectedIndex ? style['embla__dot--selected'] : ''}`}
						/>
					))}
				</div>
				<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
			</div>
		</div>
	)
}

export default EmblaCarousel
