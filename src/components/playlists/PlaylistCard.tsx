import type { ReactElement } from "react"
import { Thumpnail } from "../utils/thumpnials/Thumpnail"
import { Button } from "../utils/buttons/Button"
import { Title } from "../utils/titles/Title"
import { myPlaylist } from "../../data/myPlaylist"

import "./playlistCard.css"
import { Link } from "../link/Link"

export const PlaylistCard = (): ReactElement => {
  return (
    <>
      <section className="playlist-card">
        {myPlaylist.map(item => (
          <Link href="#" key={item.song}>
            <article className="song-card">
              <Thumpnail image={item.image} imageAlt={item.alt} />
              <Title song={item.song} artist={item.artist} />
            </article>
            <Button icon="play_circle" />
          </Link>
        ))}
      </section>
    </>
  )
}
