import { defineConfig } from 'sanity'
// import { BASE_URL, projectId, dataset } from './src/env'
import { structureTool } from 'sanity/structure'
import structure from './src/sanity/src/structure'
import defaultDocumentNode from './src/sanity/src/defaultDocumentNode'
import { presentationTool } from 'sanity/presentation'
import {
	dashboardTool,
	projectInfoWidget,
	projectUsersWidget,
} from '@sanity/dashboard'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'

import { documentInternationalization } from '@sanity/document-internationalization'
import { inlineSvgInput } from '@focus-reactive/sanity-plugin-inline-svg-input'
import { iconify } from 'sanity-plugin-iconify'
import { advancedArray } from './src/sanity/plugins/sanity-plugin-advanced-array'
import { table } from '@sanity/table'
import { Logo } from './src/sanity/static/wazen-logo'

const singletonTypes = ['site']

export default defineConfig({
	name: 'default',
	title: 'Wazen',
	icon: Logo,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
	basePath: '/admin',

	plugins: [
		structureTool({
			title: 'Content',
			defaultDocumentNode,
			structure,
		}),
		// presentationTool({
		// 	title: 'Editor',
		// 	previewUrl: {
		// 		draftMode: {
		// 			enable: `${process.env.NEXT_PUBLIC_BASE_URL}/api/draft`,
		// 		},
		// 	},
		// }),
		dashboardTool({
			title: 'Deployment',
			widgets: [projectInfoWidget(), projectUsersWidget()],
		}),
		visionTool({
			title: 'GROQ',
		}),
		documentInternationalization({
			// Required configuration
			supportedLanguages: [
				{ id: 'ar', title: 'Arabic' },
				{ id: 'en', title: 'English' },
			],
			schemaTypes: [
				'site',
				'navigation',
				'page',
				'app.store.app',
				'call.to.action.doc',
				'pricing',
			],
		}),
		inlineSvgInput(),
		iconify({
			collections: ['ph'],
			showName: true,
		}),
		advancedArray(),
		table(),
	],

	tasks: { enabled: false },
	scheduledPublishing: {
		enabled: false,
	},

	schema: {
		types: schemaTypes,
		templates: (templates) =>
			templates.filter(
				({ schemaType }) => !singletonTypes.includes(schemaType),
			),
	},

	document: {
		actions: (input, { schemaType }) =>
			singletonTypes.includes(schemaType)
				? input.filter(
						({ action }) =>
							action &&
							['publish', 'discardChanges', 'restore'].includes(action),
					)
				: input,
	},
})
