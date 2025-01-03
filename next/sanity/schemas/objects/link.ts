import { defineField, defineType } from 'sanity'
import { VscLink } from 'react-icons/vsc'

export default defineType({
	name: 'link',
	title: 'Link',
	icon: VscLink,
	type: 'object',
	fields: [
		defineField({
			name: 'label',
			type: 'string',
		}),
		defineField({
			name: 'description',
			type: 'text',
		}),
		defineField({
			name: 'iconify',
			title: 'Icon (Phosphor icons)',
			description: `Go to https://phosphoricons.com/ and find the icon of your choice. Copy it's name and paste it here to look it up.`,
			type: 'icon',
		}),
		defineField({
			name: 'type',
			type: 'string',
			options: {
				layout: 'radio',
				list: [
					{ title: 'internal', value: 'internal' },
					{ title: 'external', value: 'external' },
				],
			},
			initialValue: 'internal',
		}),
		defineField({
			name: 'internal',
			type: 'reference',
			to: [{ type: 'page' }, { type: 'blog.post' }],
			hidden: ({ parent }) => parent?.type !== 'internal',
		}),
		defineField({
			name: 'external',
			type: 'url',
			validation: (Rule) =>
				Rule.uri({
					scheme: ['http', 'https', 'mailto', 'tel'],
					allowRelative: true,
				}),
			hidden: ({ parent }) => parent?.type !== 'external',
		}),
		defineField({
			name: 'params',
			title: 'URL params',
			type: 'string',
			hidden: ({ parent }) => parent?.type !== 'internal',
		}),
	],
	preview: {
		select: {
			label: 'label',
			_type: 'internal._type',
			title: 'internal.title',
			slug: 'internal.metadata.slug.current',
			external: 'external',
			params: 'params',
		},
		prepare: ({ label, _type, title, slug, external, params }) => ({
			title: label || title,
			subtitle: [
				_type === 'blog.post' ? '/blog' : null,
				external || (slug && (slug === 'index' ? '/' : `/${slug}`)),
				params,
			]
				.filter(Boolean)
				.join(''),
		}),
	},
})
