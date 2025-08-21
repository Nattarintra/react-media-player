import type { ReactElement } from "react"
import { PlaylistCard } from "../playlists/PlaylistCard"
import { PlayingMusic } from "../display-music/PlayingMusic"
import "./desktop.css"

export const Desktop = (): ReactElement => {
  return (
    <section className="desktop">
      <PlaylistCard />
      <PlayingMusic />
    </section>
  )
}
