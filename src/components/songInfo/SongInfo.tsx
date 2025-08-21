import type { ReactElement } from "react"
import { Button } from "../utils/buttons/Button"
import { Title, type ITitleProps } from "../utils/titles/Title"
import "./songinfo.css"

interface ISongInfoProps {
  props: ITitleProps
}

export const SongInfo = ({ props }: ISongInfoProps): ReactElement => {
  const { artist, song } = props
  return (
    <section className="song-info-card">
      <Button icon="add_circle" />
      <Title artist={artist} song={song} />
      <Button icon="favorite" />
    </section>
  )
}
