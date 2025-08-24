import type { CSSProperties, ReactElement } from "react"
import "./songTitle.css"

export interface ISongTitleProps {
  song: string
  artist: string
  align?: "center" | "flex-start"
  textAlign?: "center" | "start"
}
export const SongTitle = ({ song, artist, align, textAlign }: ISongTitleProps): ReactElement => {
  const styles: CSSProperties = { alignItems: align, textAlign: textAlign }
  return (
    <div className="artist-band" style={styles}>
      <p className="song">{song}</p>
      <p className="artist">{artist}</p>
    </div>
  )
}
