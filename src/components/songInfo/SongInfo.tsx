import type { CSSProperties, ReactElement } from "react"
import { SongTitle, type ISongTitleProps } from "../utils/songTitles/SongTitle"
import "./songinfo.css"
import { Icon } from "../utils/icon/Icon"
import { useMediaQuery } from "../../hooks/useMediaQuery"

interface ISongInfoProps {
  props: ISongTitleProps
}

export const SongInfo = ({ props }: ISongInfoProps): ReactElement => {
  const { artist, song } = props
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" })

  const styles: CSSProperties = {
    display: "flex",
    justifyContent: "space-between"
  }
  return (
    <section style={styles}>
      <Icon size={isDesktop ? "large" : isTablet ? "medium" : "small"} iconName="add_circle" />
      <SongTitle textAlign="center" align="center" artist={artist} song={song} />
      <Icon size={isDesktop ? "large" : isTablet ? "medium" : "small"} iconName="favorite" />
    </section>
  )
}
