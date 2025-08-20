import type { ReactElement } from "react"
import { Button } from "../utils/buttons/Button"
import { Title, type ITitleProps } from "../utils/titles/Title"

interface ISongInfoProps {
  props: ITitleProps
}

export const SongInfo = ({ props }: ISongInfoProps): ReactElement => {
  const { artist, song } = props
  return (
    <>
      <Button icon="add_circle" />
      <Title artist={artist} song={song} />
      <Button icon="favorite" />
    </>
  )
}
