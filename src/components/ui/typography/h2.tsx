import { FC, PropsWithChildren } from "react"

export const TypographyH2: FC<PropsWithChildren> = ({children}) => {
  return (
    <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h1>
  )
}