import { FC, PropsWithChildren } from "react"

export const TypographyP: FC<PropsWithChildren> = ({ children }) => {
	return (
		<p className="leading-7">
			{children}
		</p>
	)
}