import { GrBlockQuote } from 'react-icons/gr'
import { count, getBlockText } from '../../src/utils'

export default {
	name: 'testimonial-list',
	title: 'Testimonial list',
	icon: GrBlockQuote,
	type: 'object',
	fields: [
		{
			name: 'pretitle',
			type: 'string',
		},
		{
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'testimonials',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
			description: 'Leave empty to display all testimonials',
		},
	],
	preview: {
		select: {
			content: 'content',
			testimonials: 'testimonials',
		},
		prepare: ({ content, testimonials }: any) => ({
			title: getBlockText(content) || count(testimonials, 'testimonial'),
			subtitle: 'Testimonial list',
		}),
	},
}
