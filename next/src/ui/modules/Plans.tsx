import Pricing from '@/components/Pricing'
import {
	PortableText,
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from '@portabletext/react'

export default async function Plans({
	content,
	tiers
}: Partial<{
	content: any
	tiers: any
}>) {

	const components: PortableTextComponents = {
		types: {
			block: ({ value }: PortableTextTypeComponentProps<any>) => {
				if (value.style === 'h2') {
					return (
						<h2 className="h2 font-semibold leading-tight text-cyan-950">
							{value.children.map((child: any) => child.text).join('')}
						</h2>
					)
				}
				return (
					<p className="text-main font-semibold text-gray-400">
						{value.children.map((child: any) => child.text).join('')}
					</p>
				)
			},
		},
	}

	return (
		<section className="section py-12 bg-teal-50">
			<div className="fluid-gap flex w-full flex-col items-center">
				<PortableText value={content} components={components} />
			</div>
			<Pricing />
		</section>
	)
}