import CTA from '@/ui/CTA'

function NavItemList({ label, links }: Sanity.LinkGroup) {
	return (
		<div className="min-w-40">
			<summary className="flex h-8 items-center font-semibold no-underline">
				{label}
			</summary>

			<ul className="left-0 top-full">
				{links?.map((link, key) => (
					<li key={key} className="h-8  text-gray-600">
						<CTA className="link" link={link} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default NavItemList