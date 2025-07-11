import { fetchSanity } from '@/sanity/lib/fetch'
import { groq } from 'next-sanity'
import AppCard from './AppCard'
import { cn } from '@/lib/utils'
import { getLocale } from 'next-intl/server'

export default async function AppStoreRollup({
	limit = 100,
	category,
}: Partial<{
	limit?: number
	category: any
}>) {
	const locale = await getLocale()

	const apps = await fetchSanity({
		query: groq`*[_type == 'app.store.app' && language == $locale ]{
		 title, 
		 icon, 
		 description,
		 publishDate,
		 metadata {
                ...,
                'ogimage': image.asset->url
            }
		}`,
		params: {
			locale: locale,
			limit,
		},
	})
	if (apps)
		return (
			<section className="">
				<div className="section fluid-gap flex flex-col items-center py-(--size--4rem)">
					<ul
						className={cn(
							'w-full gap-6',
							'grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]',
						)}
					>
						{apps?.map((app: any, key: string) => (
							<li key={key}>
								<AppCard app={app} locale={locale} />
							</li>
						))}
					</ul>
				</div>
			</section>
		)
}
