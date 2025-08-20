import type { ReactElement } from "react"

interface ITitleProps {
  artist: string
  name: string
}
export const Title = ({ artist, name }: ITitleProps): ReactElement => {
  return (
    <section>
      <p>{artist}</p>
      <p>{name}</p>
    </section>
  )
}
