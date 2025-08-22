import type { ReactElement } from "react"
import "./button-play.css"
import { Icon } from "../utils/icon/Icon"
import { useMediaQuery } from "../../hooks/useMediaQuery"

export const ButtonPlay = (): ReactElement => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" })
  return (
    <section className="btn-play-card">
      <Icon size={isDesktop ? "large" : isTablet ? "medium" : "small"} iconName="repeat" />
      <div className="btn-play-center">
        <Icon fill size={isDesktop ? "large" : isTablet ? "medium" : "small"} iconName="fast_rewind" />
        <Icon fill size={isDesktop ? "large" : isTablet ? "medium" : "small"} iconName="play_circle" />
        <Icon fill size={isDesktop ? "large" : isTablet ? "medium" : "small"} iconName="fast_forward" />
      </div>
      <Icon size={isDesktop ? "large" : isTablet ? "medium" : "small"} iconName="shuffle" />
    </section>
  )
}
