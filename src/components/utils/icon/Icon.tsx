import type { ReactElement } from "react"
import "./icon.css"

interface IIconProps {
  className?: string
  fill?: true
  size?: "small" | "medium" | "large"
  iconName: string
}
export const Icon = ({ className, fill, size, iconName }: IIconProps): ReactElement => {
  const classNames = ["material-symbols-outlined icon"]

  if (className) classNames.push(className)
  if (fill) classNames.push("fill")
  if (size) classNames.push(size)

  return <span className={classNames.join(" ")}>{iconName}</span>
}
