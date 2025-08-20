import type { ReactElement, ReactNode } from "react"

interface ILinkProps {
  href: string
  children: ReactNode
}
export const Link = ({ href, children }: ILinkProps): ReactElement => {
  return (
    <a href={href} className="link">
      {children}
    </a>
  )
}
