import { FC, PropsWithChildren } from "react"

export const TypographyH3: FC<PropsWithChildren> = ({ children }) => {
	return (
		<h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
			{children}
		</h1>
	)
}