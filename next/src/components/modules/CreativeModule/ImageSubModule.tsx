import { Img } from '@/components/Img'
import { stegaClean } from 'next-sanity'
import type { ComponentProps } from 'react'

export type ImageSubModuleType = Sanity.Module<'image'> &
	Sanity.Image &
	Partial<{
		aspectRatio: string
	}>

export default function ImageSubModule({
	module,
	...props
}: {
	module: ImageSubModuleType
} & Omit<ComponentProps<typeof Img>, 'image'>) {
	return (
		<figure>
			<Img
				className="w-full object-cover"
				style={{ aspectRatio: stegaClean(module.aspectRatio) }}
				image={module}
				{...props}
			/>
		</figure>
	)
}
