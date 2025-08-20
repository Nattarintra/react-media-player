import type { ReactElement } from "react"
import { Thumpnail } from "../utils/thumpnials/Thumpnail"
import { Button } from "../utils/buttons/Button"
import { Title } from "../utils/titles/Title"
import { myPlaylist } from "../../data/myPlaylist"

import "./playlistCard.css"

export const PlaylistCard = (): ReactElement => {
  return (
    <>
      {myPlaylist.map(item => (
        <section className="playlist-card">
          <article key={item.song} className="song-card">
            <Thumpnail image={item.image} imageAlt={item.alt} />
            <Title artist={item.song} name={item.artist} />
          </article>
          <Button icon="play_circle" />
        </section>
      ))}
    </>
  )
}
