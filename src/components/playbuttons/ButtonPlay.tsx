import type { ReactElement } from "react"
import { Button } from "../utils/buttons/Button"

export const ButtonPlay = (): ReactElement => {
  return (
    <section>
      <Button icon="repeat" />
      <Button icon="fast_rewind" />
      <Button icon="play_circle" />
      <Button icon="fast_forward" />
      <Button icon="shuffle" />
    </section>
  )
}
