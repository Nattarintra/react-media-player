import type { ReactElement } from "react"
import "./App.css"

import { Header } from "./components/headers/Header"

import { Desktop } from "./components/desktop/Desktop"
import { MobileFirst } from "./components/mobile.tsx/MobileFirst"
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
