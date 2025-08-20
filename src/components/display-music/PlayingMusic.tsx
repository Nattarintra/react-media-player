import type { ReactElement } from "react"
import { Thumpnail } from "../utils/thumpnials/Thumpnail"
import { SongInfo } from "../songInfo/SongInfo"
import { ButtonPlay } from "../playbuttons/ButtonPlay"
import { SongImage } from "./SongImage"

import toTheMoon from "./../../assets/song-image.png"
import timeLine from "./../../assets/timeline.png"

export const PlayingMusic = (): ReactElement => {
  return (
    <>
      <SongImage image={toTheMoon} imageAlt="A rocket to the moon" />
      <SongInfo />
      <Thumpnail image={timeLine} imageAlt="Time line image" />
      <ButtonPlay />
    </>
  )
}
