import type { ReactElement } from "react"
import "./thumpnail.css"

interface IThumpnailProps {
  image: string
  imageAlt: string
  className?: string
  size?: "sx" | "sm" | "md" | "l" | "full-width"
}

export const Thumpnail = ({ image, imageAlt, className, size }: IThumpnailProps): ReactElement => {
  const classes = ["thumpnail"]
  if (className) classes.push(className)
  if (size) classes.push(size)

  return (
    <figure className={classes.join(" ")}>
      <img src={image} alt={imageAlt} />
    </figure>
  )
}
