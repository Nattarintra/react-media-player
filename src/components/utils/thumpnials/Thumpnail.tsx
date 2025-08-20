import type { ReactElement } from "react"

// import thumpnailImg from "./../../../assets/song-image.png" // import where you want to call this func
interface IThumpnailProps {
  image: string
  imageAlt: string
}

export const Thumpnail = ({ image, imageAlt }: IThumpnailProps): ReactElement => {
  return (
    <figure>
      <img src={image} alt={imageAlt} />
    </figure>
  )
}
