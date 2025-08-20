import type { ReactElement } from "react"
import "./title.css"

export interface ITitleProps {
  song: string
  artist: string
}
export const Title = ({ song, artist }: ITitleProps): ReactElement => {
  return (
    <section className="artist-band">
      <p>{song}</p>
      <p>{artist}</p>
    </section>
  )
}
