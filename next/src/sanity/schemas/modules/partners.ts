import { getBlockText } from '../../src/utils'
import { VscSymbolMisc } from 'react-icons/vsc'

export default {
	name: 'partners',
	title: 'Partners',
	icon: VscSymbolMisc,
	type: 'object',
	fields: [
		{
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'Subtitle',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'logoType',
			type: 'string',
			options: {
				layout: 'radio',
				list: ['default', 'light', 'dark'],
			},
			initialValue: 'default',
		},
		{
			name: 'logos',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'logo' }] }],
		},
	],
	preview: {
		select: {
			content: 'content',
			subtitle: 'subtitle',
		},
		prepare: ({ content, subtitle }: any) => ({
			title: subtitle || getBlockText(content),
			subtitle: 'Partners',
		}),
	},
}
