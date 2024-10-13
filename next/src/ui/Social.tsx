import { getSite } from '@/lib/sanity/queries'
import CTA from './CTA'
import { clean, cn } from '@/lib/utils'
import { Link } from '@/i18n/navigations'

import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTiktok,
	FaXTwitter,
	FaYoutube,
} from 'react-icons/fa6'
import { IoIosLink } from 'react-icons/io'
import { getTranslations, getLocale } from 'next-intl/server'
import processUrl from '@/lib/processUrl'

export default async function Social({
	staticLinks,
	className,
	locale,
}: {
	staticLinks: any
	className: string
	locale: any
}) {
	const t = await getTranslations('Index')

	const { social } = await getSite(locale)

	let currentDate = new Date()
	let currentYear = currentDate.getFullYear()

	if (!social?.items?.length) return null

	return (
		<nav
			className={cn(
				'flex flex-col-reverse flex-wrap items-center gap-4 md:flex-row',
				className,
			)}
		>
			<div className="flex flex-col items-center gap-8 text-sm text-white/50 md:items-start lg:flex-row">
				<span>{`© ${currentYear} ${t('All rights reserved')}`}</span>

				<div className="inline-flex gap-4 text-start">
					{staticLinks?.items?.map((item: any, key: any) => {
						return (
							<CTA
								key={key}
								link={item}
								locale={locale}
								className="no-underline transition-all hover:text-white"
							/>
						)
					})}
				</div>
			</div>

			<div className="group flex flex-wrap items-center">
				{social.items.map((item, key) => {
					switch (item._type) {
						case 'link':
							return (
								<CTA
									className="p-2 text-lg hover:!opacity-100 group-has-[a:hover]:opacity-50"
									link={item}
									key={key}
								>
									<Icon url={item.external} aria-label={clean(item.label)} />
								</CTA>
							)

						default:
							return null
					}
				})}
			</div>
		</nav>
	)
}

function Icon({
	url,
	...props
}: { url?: string } & React.HTMLProps<SVGElement>) {
	if (!url) return null

	return url?.includes('facebook.com') ? (
		<FaFacebook {...props} />
	) : url?.includes('github.com') ? (
		<FaGithub {...props} />
	) : url?.includes('instagram.com') ? (
		<FaInstagram {...props} />
	) : url?.includes('linkedin.com') ? (
		<FaLinkedin {...props} />
	) : url?.includes('tiktok.com') ? (
		<FaTiktok {...props} />
	) : url?.includes('twitter.com') || url?.includes('x.com') ? (
		<FaXTwitter {...props} />
	) : url?.includes('youtube.com') ? (
		<FaYoutube {...props} />
	) : (
		<IoIosLink {...props} />
	)
}
