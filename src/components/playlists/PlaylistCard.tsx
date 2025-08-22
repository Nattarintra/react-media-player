import type { ReactElement } from "react"
import { Thumpnail } from "../utils/thumpnials/Thumpnail"
import { Button } from "../utils/buttons/Button"
import { SongTitle } from "../utils/songTitles/SongTitle"
import { myPlaylist } from "../../data/myPlaylist"

import "./playlistCard.css"
import { Link } from "../link/Link"
import { useMediaQuery } from "../../hooks/useMediaQuery"

export const PlaylistCard = (): ReactElement => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" })

  return (
    <>
      <section className="playlist-wrap">
        {myPlaylist.map(item => (
          <Link href="#" key={item.song}>
            <article className="song-card">
              <Thumpnail className={isTablet ? "sm" : "sx"} image={item.image} imageAlt={item.alt} />
              <SongTitle textAlign="start" align="flex-start" song={item.song} artist={item.artist} />
            </article>
            <Button icon="play_circle" />
          </Link>
        ))}
      </section>
    </>
  )
}
