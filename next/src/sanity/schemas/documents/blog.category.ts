import { VscEdit } from 'react-icons/vsc'

const supportedLanguages = [
	{ id: 'ar', title: 'Arabic', isDefault: true },
	{ id: 'en', title: 'English' },
]

export const baseLanguage = supportedLanguages.find((l) => l.isDefault)

const localeString = {
	title: 'Title',
	name: 'title',
	type: 'object',
	fieldsets: [
		{
			title: 'Translations',
			name: 'translations',
			options: { collapsible: true },
		},
	],
	// Dynamically define one field per language
	fields: supportedLanguages.map((lang) => ({
		title: lang.title,
		name: lang.id,
		type: 'string',
		fieldset: lang.isDefault ? null : 'translations',
	})),
}

export default {
	name: 'blog.category',
	title: 'Blog category',
	icon: VscEdit,
	type: 'document',
	fields: [localeString],
	preview: {
		select: {
			title: 'title.ar',
		},
		prepare(selection: { title: string }) {
			return { title: selection.title }
		},
	},
}
