import * as React from 'react'
// import { ChevronDownIcon } from "@radix-ui/react-icons"
import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui'
import { cva } from 'class-variance-authority'
import { Icon } from '@iconify-icon/react'
import { cn } from '@/lib/utils'

const NavigationMenu = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		ref={ref}
		className={cn(
			'relative z-10 flex max-w-max flex-1 items-center justify-center max-lg:flex-col',
			className,
		)}
		{...props}
	>
		{children}
		{/* bring back viewport */}
		<NavigationMenuViewport />
	</NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={cn(
			'-relative flex flex-1 list-none items-center justify-center gap-1 space-x-1 max-lg:flex-col',
			className,
		)}
		{...props}
	/>
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

// const NavigationMenuItem = React.forwardRef<
// 	React.ElementRef<typeof NavigationMenuPrimitive.Item>,
// 	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
// >(({ className, ...props }, ref) => (
// 	<NavigationMenuPrimitive.Item
// 		ref={ref}
// 		className={cn('relative', className)}
// 		{...props}
// 	/>
// ))
// NavigationMenuItem.displayName = 'NavigationMenuItem'
// comment top component when using viewport
const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
	'group relative inline-flex h-10 w-full items-center justify-start rounded-md bg-white px-4 py-4 text-sm font-medium transition-colors hover:bg-teal-50 text-cyan-950/80 hover:text-cyan-700 focus:bg-teal-50 focus:text-cyan-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-active:bg-teal-50/50 data-[state=open]:bg-bg-teal-50/50',
)

const NavigationMenuTrigger = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cn(navigationMenuTriggerStyle(), 'group', className)}
		{...props}
	>
		{children}
		{''}

		<Icon
			icon="ph:caret-down-bold"
			className="relative ms-1 text-xs leading-none transition duration-200 group-data-[state=open]:rotate-180"
			aria-hidden="true"
		/>
	</NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cn(
			// 'data-[state=closed]=fade-out-0 data-[state=open]=fade-in-0 absolute -start-6 end-auto duration-200 max-lg:start-0',
			// 'absolute top-full z-10 mt-1.5 w-fit rounded-md border border-gray-200 bg-white shadow-lg',
			// 'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
			'start-0 top-0 w-96 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',

			className,
		)}
		{...props}
	/>
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
	<div
		className={cn(
			'-start-3 end-auto top-full flex justify-center gap-2 lg:absolute',
		)}
	>
		<NavigationMenuPrimitive.Viewport
			className={cn(
				'origin-top-center data-[state=closed]=fade-out-0 data-[state=open]=fade-in-0 -dark:border-gray-800 -dark:bg-gray-950 -dark:text-gray-50 relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-md border border-gray-200 bg-white text-gray-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-(--radix-navigation-menu-viewport-width)',
				className,
			)}
			ref={ref}
			{...props}
		/>
	</div>
))
NavigationMenuViewport.displayName =
	NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={cn(
			'top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
			className,
		)}
		{...props}
	>
		<div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-gray-200 shadow-md dark:bg-gray-800" />
	</NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
	NavigationMenuPrimitive.Indicator.displayName

export {
	navigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
}
