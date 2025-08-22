import type { ReactElement } from "react"
import "./header.css"
import { Icon } from "../utils/icon/Icon"
import { useMediaQuery } from "../../hooks/useMediaQuery"

export const Header = (): ReactElement => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" })

  return (
    <>
      <header id="header">
        <Icon size={isDesktop ? "large" : isTablet ? "medium" : "small"} iconName="chevron_left" />
        <h1>Playlist - Moody</h1>
        <Icon size={isDesktop ? "large" : isTablet ? "medium" : "small"} iconName="more_vert" />
      </header>
    </>
  )
}
