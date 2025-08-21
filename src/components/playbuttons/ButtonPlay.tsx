import type { ReactElement } from "react"
import { Button } from "../utils/buttons/Button"
import "./button-play.css"

export const ButtonPlay = (): ReactElement => {
  return (
    <section className="btn-play-card">
      <Button icon="repeat" />
      <div className="btn-play-center">
        <Button icon="fast_rewind" />
        <Button icon="play_circle" />
        <Button icon="fast_forward" />
      </div>
      <Button icon="shuffle" />
    </section>
  )
}
