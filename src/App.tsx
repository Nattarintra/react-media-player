import type { ReactElement } from "react"
import "./App.css"

import { Header } from "./components/headers/Header"
import { PlaylistCard } from "./components/playlists/PlaylistCard"
import { PlayingMusic } from "./components/display-music/PlayingMusic"

const App = (): ReactElement => {
  return (
    <>
      <Header />
      <PlayingMusic />
      <PlaylistCard />
    </>
  )
}

export default App
