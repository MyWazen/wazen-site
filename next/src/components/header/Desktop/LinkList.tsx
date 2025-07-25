import { Icon } from '@iconify-icon/react'
import processUrl from '@/lib/processUrl'
import { Link } from '@/i18n/routing'
import * as React from 'react'
import { cn } from '@/lib/utils'
import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export default function LinkList({
	label,
	links,
	locale,
}: Sanity.LinkList & { locale: 'en' | 'ar' }) {
	return (
		<NavigationMenuItem key={label} className="w-full">
			<NavigationMenuTrigger className="group relative">
				{label}
			</NavigationMenuTrigger>
			<NavigationMenuContent className="max-lg:w-full">
				{links && (
					<ul className="grid w-full gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
						{links?.[0] && (
							<li key={links?.[0].label} className="group row-span-3">
								<Link
									className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-cyan-800 to-cyan-950 p-4 text-start no-underline outline-none transition-all focus:shadow-md"
									locale={locale}
									href={processUrl(links[0].internal as Sanity.PageBase, {
										base: false,
										params: links[0].params,
									})}
								>
									<img
										src="https://cdn.sanity.io/images/m7bjawr3/production/4d0c0529d981a468765adb5a1f3f3a896befe909-1440x1024.svg?w=540&fm=webp"
										alt={links?.[0].label}
										className="h-auto w-full rounded-md"
										draggable={false}
										fetchPriority="high"
										loading="eager"
										width={540}
									/>
									<div className="mb-2 mt-4 flex flex-row items-center text-lg font-medium text-white group-hover:text-teal-500">
										{links?.[0].label}
										<Icon
											icon="ph:caret-left-bold"
											className="size-3 text-white/50 opacity-0 transition-transform group-hover:-translate-x-1 group-hover:opacity-100 ltr:rotate-180 ltr:group-hover:translate-x-1"
										/>
									</div>
									<p className="text-sm leading-tight text-white/80 group-hover:text-white">
										{links?.[0].description}
									</p>
								</Link>
							</li>
						)}
						{links?.slice(1).map((link: any, key) => {
							return (
								<ListItem
									href={
										'/' +
										locale +
										processUrl(link.internal, {
											base: false,
											params: link.params,
										})
									}
									key={link.label}
									className="group relative flex w-full flex-col p-3 text-start transition-all hover:bg-teal-50"
								>
									<div className="flex flex-row items-center font-medium text-gray-950 group-hover:text-teal-600">
										{link.label}
										<Icon
											icon="ph:caret-left-bold"
											className="size-3 text-teal-500/50 opacity-0 transition-transform group-hover:-translate-x-1 group-hover:opacity-100 ltr:rotate-180 ltr:group-hover:translate-x-1"
										/>
									</div>
									<p className="text-gray-600 group-hover:text-cyan-950">
										{link.description}
									</p>
								</ListItem>
							)
						})}
					</ul>
				)}
			</NavigationMenuContent>
		</NavigationMenuItem>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
