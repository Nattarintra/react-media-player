import type { ReactElement } from "react"
import { Thumpnail } from "../utils/thumpnials/Thumpnail"
import { SongInfo } from "../songInfo/SongInfo"
import { ButtonPlay } from "../playbuttons/ButtonPlay"
import timeLine from "./../../assets/timeline.png"

import { myPlaylist } from "../../data/myPlaylist"

import "./playing-music-card.css"

export const PlayingMusic = (): ReactElement => {
  return (
    <>
      <section className="playing-music-card">
        {myPlaylist[0] && (
          <article className="playing-inner-card">
            <Thumpnail className="large" image={myPlaylist[0].image} imageAlt={myPlaylist[0].alt} />
            <SongInfo props={myPlaylist[0]} />
            <Thumpnail image={timeLine} imageAlt="Time line image" />
            <ButtonPlay />
          </article>
        )}
      </section>
    </>
  )
}
