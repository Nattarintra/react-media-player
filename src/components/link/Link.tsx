import type { ReactElement, ReactNode } from "react"

interface ILinkProps {
  href: string
  children: ReactNode
  className?: string
}
export const Link = ({ href, children, className }: ILinkProps): ReactElement => {
  const classes = ["link "]
  if (className) classes.push(className)
  return (
    <a href={href} className={classes.join(" ")}>
      {children}
    </a>
  )
}
