import type { ReactElement } from "react"
import "./App.css"

import { Header } from "./components/headers/Header"

import { Desktop } from "./components/screenMode/desktop/Desktop"
import { MobileFirst } from "./components/screenMode/mobile/MobileFirst"
import { useMediaQuery } from "./hooks/useMediaQuery"

const App = (): ReactElement => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  return (
    <>
      <Header />
      {isDesktop ? <Desktop /> : <MobileFirst />}
    </>
  )
}

export default App
