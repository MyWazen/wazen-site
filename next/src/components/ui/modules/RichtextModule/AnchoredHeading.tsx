import { slug } from '@/lib/utils'
import type { PortableTextBlock, PortableTextComponentProps } from 'next-sanity'

export default function AnchoredHeading({
	as: Tag,
	children,
	value,
}: {
	as: React.ElementType
} & PortableTextComponentProps<PortableTextBlock>) {
	const id = slug(value.children[0].text)

	return (
		<Tag id={id} className="group">
			{children}

			<a className="ms-2 md:hidden md:group-hover:inline-block" href={`#${id}`}>
				🔗
			</a>
		</Tag>
	)
}
