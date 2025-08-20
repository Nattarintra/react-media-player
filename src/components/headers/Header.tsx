import type { ReactElement } from "react"
import { Button } from "../utils/buttons/Button"
import "./header.css"

export const Header = (): ReactElement => {
  return (
    <>
      <header>
        <Button icon="chevron_left" />
        <h1>Playlist - Moody</h1>
        <Button icon="more_vert" />
      </header>
    </>
  )
}
