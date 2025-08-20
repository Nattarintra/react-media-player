import type { ReactElement } from "react"
import { Thumpnail } from "../utils/thumpnials/Thumpnail"
import { Button } from "../utils/buttons/Button"
import { Title } from "../utils/titles/Title"
import rockMoonImg from "./../../assets/song-image.png"

export const PlaylistCard = (): ReactElement => {
  return (
    <>
      <section>
        <Thumpnail image={rockMoonImg} imageAlt="Rock moon songs" />
        <Title artist="A Rocket to the moon" name="Like we used to" />
        <Button icon="play_circle" />
      </section>
      <section>
        <Thumpnail image={rockMoonImg} imageAlt="Rock moon songs" />
        <Title artist="A Rocket to the moon" name="Like we used to" />
        <Button icon="play_circle" />
      </section>
      <section>
        <Thumpnail image={rockMoonImg} imageAlt="Rock moon songs" />
        <Title artist="A Rocket to the moon" name="Like we used to" />
        <Button icon="play_circle" />
      </section>
      <section>
        <Thumpnail image={rockMoonImg} imageAlt="Rock moon songs" />
        <Title artist="A Rocket to the moon" name="Like we used to" />
        <Button icon="play_circle" />
      </section>
    </>
  )
}
