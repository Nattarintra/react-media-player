import type { ReactElement } from "react"
import { Thumpnail } from "../utils/thumpnials/Thumpnail"
import { SongTitle } from "../utils/songTitles/SongTitle"
import { myPlaylist } from "../../data/myPlaylist"

import "./playlistCard.css"
import { Link } from "../link/Link"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { Icon } from "../utils/icon/Icon"

export const PlaylistCard = (): ReactElement => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" })

  return (
    <>
      <section className="playlist-wrap">
        {myPlaylist.map(item => (
          <Link className="playlist-card" href="#" key={item.song}>
            <article className="playlist-inner-card">
              <Thumpnail className={isTablet ? "sm" : "sx"} image={item.image} imageAlt={item.alt} />
              <SongTitle textAlign="start" align="flex-start" song={item.song} artist={item.artist} />
            </article>
            <Icon size={isDesktop ? "large" : isTablet ? "medium" : "small"} iconName="play_circle" />
          </Link>
        ))}
      </section>
    </>
  )
}
