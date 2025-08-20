import type { ReactElement } from "react"
import "./title.css"

interface ITitleProps {
  artist: string
  name: string
}
export const Title = ({ artist, name }: ITitleProps): ReactElement => {
  return (
    <section className="artist-band">
      <p>{artist}</p>
      <p>{name}</p>
    </section>
  )
}
