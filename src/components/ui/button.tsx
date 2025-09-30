import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
	{
		variants: {
			variant: {
				default:
					'bg-cyan-950 text-white hover:bg-cyan-900 focus-visible:ring-cyan-950 max-md:w-full',
				primary:
					'bg-cyan-950 text-white hover:bg-cyan-900 focus-visible:ring-cyan-950 max-md:w-full',
				secondary:
					'bg-teal-600 text-white hover:bg-teal-500 focus-visible:ring-teal-600 max-md:w-full',
				tertiary:
					'bg-white text-cyan-950/80 hover:bg-teal-50 hover:text-cyan-700 focus-visible:ring-teal-600 max-md:w-full',
				destructive:
					'bg-red-500 text-white hover:bg-red-500/90 focus-visible:ring-red-500',
				outline:
					'border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-950',
				ghost:
					'hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-950',
				link: 'text-cyan-950 underline-offset-4 hover:underline focus-visible:ring-cyan-950',
			},
			size: {
				default: 'h-10 px-4',
				sm: 'h-8 rounded-md px-3',
				lg: 'h-12 rounded-lg px-6',
				icon: 'size-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
