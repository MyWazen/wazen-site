import {
	PortableText,
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from '@portabletext/react'
import CTAList from '@/components/CTAList'
import Pretitle from '@/components/Pretitle'
import { cn } from '@/lib/utils'
import { set2 } from '@/components/portable-text'
import * as m from 'motion/react-m'

export default function HeroTwo({
	pretitle,
	content,
	Subtitle,
	ctas,
	bgImage,
	bgImageMobile,
	textAlign = 'center',
	alignItems,
}: Partial<{
	pretitle: string
	content: any
	Subtitle: any
	ctas: Sanity.CTA[]
	bgImage: Sanity.Image
	bgImageMobile: Sanity.Image
	textAlign: React.CSSProperties['textAlign']
	alignItems: React.CSSProperties['alignItems']
}>) {
	const hasImage = !!bgImage?.asset
	const FADE_DOWN_ANIMATION_VARIANTS = {
		hidden: { opacity: 0, y: -10 },
		show: { opacity: 1, y: 0, transition: { type: 'spring' } },
	}

	return (
		<section className="section pt-16 pb-12 lg:pt-28">
			<m.div
				className="cyan-gradient-background-1 flex w-full flex-col items-center justify-center gap-y-6 rounded-2xl p-12"
				initial="hidden"
				animate="show"
				viewport={{ once: true }}
				variants={{
					hidden: {},
					show: {
						transition: {
							staggerChildren: 0.15,
						},
					},
				}}
			>
				<div className={cn('relative max-w-3xl space-y-6 text-center')}>
					<Pretitle
						className={cn(
							hasImage
								? 'text-white/40'
								: 'mx-auto w-fit px-6 py-1 text-gray-400',
						)}
					>
						{pretitle}
					</Pretitle>
					<PortableText value={content} components={set2} />
				</div>
				<CTAList ctas={ctas} className="*:h-12 *:px-6 *:text-lg" />
			</m.div>
		</section>
	)
}
