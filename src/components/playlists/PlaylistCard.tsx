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
      {myPlaylist.map(item => (
        <Link href="#" key={item.song}>
          <section className="playlist-card">
            <article className="song-card">
              <Thumpnail image={item.image} imageAlt={item.alt} />
              <Title song={item.song} artist={item.artist} />
            </article>
            <Button icon="play_circle" />
          </section>
        </Link>
      ))}
    </>
  )
}
