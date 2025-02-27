import {
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from '@portabletext/react'
import * as m from 'motion/react-m'
const FADE_DOWN_ANIMATION_VARIANTS = {
	hidden: { opacity: 0, y: -10 },
	show: { opacity: 1, y: 0, transition: { type: 'spring' } },
}
export const hero: PortableTextComponents = {
	types: {
		block: ({ value }: PortableTextTypeComponentProps<any>) => {
			if (value.style === 'h1') {
				return (
					<h1
						className="text-balance ltr:tracking-tighter"
						style={{
							fontSize: 'clamp(2.99rem, 2.2724rem + 3.12vw, 4.77rem)',
							fontWeight: 600,
							marginInline: 'auto',
							filter:
								'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
							lineHeight: 1.25,
						}}
					>
						{value.children.map((child: any) => child.text).join('')}
					</h1>
				)
			}
			return (
				<p className="text-large mx-auto max-w-xl text-cyan-950 md:max-w-3xl">
					{value.children.map((child: any) => child.text).join('')}
				</p>
			)
		},
	},
}

export const set2: PortableTextComponents = {
	types: {
		block: ({ value }: PortableTextTypeComponentProps<any>) => {
			if (value.style === 'h1') {
				return (
					<m.h1
						variants={FADE_DOWN_ANIMATION_VARIANTS}
						className="h1 mx-auto max-w-3xl text-balance text-center text-cyan-950 ltr:leading-tight rtl:leading-snug"
					>
						{value.children.map((child: any) => child.text).join('')}
					</m.h1>
				)
			}
			if (value.style === 'h2') {
				return (
					<m.h2
						variants={FADE_DOWN_ANIMATION_VARIANTS}
						className="h2 font-semibold leading-tight text-cyan-950"
					>
						{value.children.map((child: any) => child.text).join('')}
					</m.h2>
				)
			}
			return (
				<m.p
					variants={FADE_DOWN_ANIMATION_VARIANTS}
					className="text-large text-cyan-950/80 rtl:leading-snug"
				>
					{value.children.map((child: any) => child.text).join('')}
				</m.p>
			)
		},
	},
}
