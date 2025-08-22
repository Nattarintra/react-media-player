import type { CSSProperties } from "react"

interface BackgroundProps {
  imageUrl: string
}

export const BackgroundDiv = ({ imageUrl }: BackgroundProps) => {
  const styles: CSSProperties = {
    height: "100%",
    width: "100%",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }

  return <div style={styles}></div>
}
