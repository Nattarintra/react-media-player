import type { ReactElement } from "react"
import { Thumpnail } from "../utils/thumpnials/Thumpnail"
import { SongInfo } from "../songInfo/SongInfo"
import { ButtonPlay } from "../playbuttons/ButtonPlay"
import { SongImage } from "./SongImage"

import timeLine from "./../../assets/timeline.png"

import { myPlaylist } from "../../data/myPlaylist"

export const PlayingMusic = (): ReactElement => {
  return (
    <>
      {myPlaylist[0] && (
        <>
          <SongImage image={myPlaylist[0].image} imageAlt={myPlaylist[0].alt} />
          <SongInfo props={myPlaylist[0]} />
          <Thumpnail image={timeLine} imageAlt="Time line image" />
          <ButtonPlay />
        </>
      )}
    </>
  )
}
