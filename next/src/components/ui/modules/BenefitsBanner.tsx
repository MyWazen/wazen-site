import { Icon } from '@iconify-icon/react'

export default function BenefitsBanner({
	pretitle,
	content,
	features,
}: Partial<{
	pretitle: string
	content: any
	Subtitle: any
	ctas: any
	features: { title: string; description: string; icon: { name: string } }[]
	textAlign: React.CSSProperties['textAlign']
}>) {
	return (
		<section className="section flex bg-white py-[var(--size--4rem)]">
			{/* <div className="flex flex-col items-center gap-6">
					<Pretitle className={'text-large font-semibold text-gray-400'}>
						{pretitle}
					</Pretitle>
					<PortableText value={content} components={components} />
				</div> */}

			<ul className="mx-auto grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{features &&
					features.map(
						(
							feature: {
								title: string
								description: string
								icon: { name: string }
							},
							index: any,
						) => (
							<li
								className="flex w-full flex-col justify-start gap-4 rounded-xl p-4 text-start"
								key={index}
							>
								<div className="size-14 self-start rounded-full bg-cyan-50 p-4">
									<Icon
										icon={feature.icon ? feature.icon.name : 'ph:cube-duotone'}
										className="text-2xl leading-none text-teal-600"
									/>
								</div>
								<h3 className="text-large font-semibold leading-tight text-cyan-950">
									{feature.title}
								</h3>
								<p className="text-main max-w-xl text-cyan-950/80 md:max-w-3xl">
									{feature.description}
								</p>
							</li>
						),
					)}
			</ul>
		</section>
	)
}
