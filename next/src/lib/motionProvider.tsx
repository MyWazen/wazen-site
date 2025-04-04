import { domAnimation, LazyMotion } from 'motion/react'

export default function Motion({ children }: { children: React.ReactNode }) {
	return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
