import type { ReactElement } from "react"

interface ISongImageProps {
  image: string
  imageAlt: string
}
export const SongImage = ({ image, imageAlt }: ISongImageProps): ReactElement => {
  return (
    <figure>
      <img src={image} alt={imageAlt} />
    </figure>
  )
}
