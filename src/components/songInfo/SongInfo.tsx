import type { ReactElement } from "react"
import { Button } from "../utils/buttons/Button"
import { Title } from "../utils/titles/Title"

export const SongInfo = (): ReactElement => {
  return (
    <>
      <Button icon="add_circle" />
      <Title artist="A Rocket to the moon" name="Like we used to" />
      <Button icon="favorite" />
    </>
  )
}
