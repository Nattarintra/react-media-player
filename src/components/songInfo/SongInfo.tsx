import type { ReactElement } from "react"
import { Button } from "../utils/buttons/Button"
import { SongTitle, type ISongTitleProps } from "../utils/songTitles/SongTitle"
import "./songinfo.css"

interface ISongInfoProps {
  props: ISongTitleProps
}

export const SongInfo = ({ props }: ISongInfoProps): ReactElement => {
  const { artist, song } = props
  return (
    <section className="song-info-card">
      <Button icon="add_circle" />
      <SongTitle textAlign="center" align="center" artist={artist} song={song} />
      <Button icon="favorite" />
    </section>
  )
}
