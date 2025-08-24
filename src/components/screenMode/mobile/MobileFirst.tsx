import type { ReactElement } from "react"
import { PlayingMusic } from "../../display-music/PlayingMusic"
import { PlaylistCard } from "../../playlists/PlaylistCard"

export const MobileFirst = (): ReactElement => {
  return (
    <section className="mobile">
      <PlayingMusic />
      <PlaylistCard />
    </section>
  )
}
