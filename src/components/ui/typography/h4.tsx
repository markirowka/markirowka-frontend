import { FC, PropsWithChildren } from "react"

export const TypographyH4: FC<PropsWithChildren> = ({ children }) => {
	return (
		<h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
			{children}
		</h1>
	)
}