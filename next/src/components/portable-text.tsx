import {
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from '@portabletext/react'
import { Variants } from 'motion/react'
import * as m from 'motion/react-m'
const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
	hidden: { opacity: 0, y: -10 },
	show: { opacity: 1, y: 0, transition: { type: 'spring' } },
}
export const hero: PortableTextComponents = {
	types: {
		block: ({ value }: PortableTextTypeComponentProps<any>) => {
			if (value.style === 'h1') {
				return (
					<h1 className="display mx-auto font-medium text-balance drop-shadow-md ltr:tracking-tighter">
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
						className="h1 mx-auto max-w-3xl text-center text-balance text-cyan-950 ltr:leading-tight rtl:leading-snug"
					>
						{value.children.map((child: any) => child.text).join('')}
					</m.h1>
				)
			}
			if (value.style === 'h2') {
				return (
					<m.h2
						variants={FADE_DOWN_ANIMATION_VARIANTS}
						className="h2 leading-tight font-semibold text-cyan-950"
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
