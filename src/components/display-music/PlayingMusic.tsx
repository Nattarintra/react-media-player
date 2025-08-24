import { useState, type ReactElement } from "react"
import { Thumpnail } from "../utils/thumpnials/Thumpnail"
import { SongInfo } from "../songInfo/SongInfo"
import { ButtonPlay } from "../playbuttons/ButtonPlay"

import { myPlaylist } from "../../data/myPlaylist"

import "./playing-music-card.css"
import { SongTimeline } from "../timeline/SongTimeline"

export const PlayingMusic = (): ReactElement => {
  const [currentTime] = useState(0)
  return (
    <section className="playing-music-card">
      {myPlaylist[0] && (
        <article className="playing-inner-card">
          <Thumpnail className="large" image={myPlaylist[0].image} imageAlt={myPlaylist[0].alt} />
          <SongInfo props={myPlaylist[0]} />
          <SongTimeline currentTime={currentTime} duration={myPlaylist[0].duration} />
          <ButtonPlay />
        </article>
      )}
    </section>
  )
}
