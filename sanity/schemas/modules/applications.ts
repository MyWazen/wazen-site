import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'applications',
	title: 'Applications',
	icon: TfiLayoutCtaCenter,
	type: 'object',
	groups: [
		{ name: 'content', title: 'Content', default: true },
		{ name: 'options', title: 'Options' },
		{ name: 'image', title: 'Image' },
	],
	fieldsets: [
		{ name: 'image', title: 'Image', options: { columns: 2 } },
		{ name: 'alignment', title: 'Alignment', options: { columns: 2 } },
	],
	fields: [
		defineField({
			name: 'pretitle',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'mainTitle',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
		}),
		defineField({
			name: 'Subtitle',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
		}),
		defineField({
			name: 'link',
			type: 'link',
			group: 'content',
		}),
		defineField({
			name: 'links',
			type: 'array',
			of: [{ type: 'app.link.list' },],
			group: 'content',
		}),
	],
	preview: {
		select: {
			pretitle:'pretitle',
			content: 'content',
			media: 'image',
		},
		prepare: ({ pretitle, content, media }) => ({
			title: pretitle || getBlockText(content),
			subtitle: 'Applications',
			media,
		}),
	},
})