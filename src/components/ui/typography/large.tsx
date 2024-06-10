import { FC, PropsWithChildren } from "react"

export const TypographyLarge: FC<PropsWithChildren> = ({ children }) => {
	return (
		<small className="text-lg font-semibold">{children}</small>
	)
}