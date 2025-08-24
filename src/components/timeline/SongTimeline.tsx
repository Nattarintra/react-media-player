import type { ReactElement } from "react"
import "./songTimeline.css"

interface ISongTimelineProps {
  currentTime: number
  duration: number
}

export const SongTimeline = ({ currentTime, duration }: ISongTimelineProps): ReactElement => {
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const seconds = String(time % 60).padStart(2, "0")
    return `${minutes}:${seconds}`
  }
  return (
    <section id="song-timeline">
      <p>{formatTime(currentTime)}</p>
      <div className="time-line outer">
        <div className="time-line inner" />
      </div>
      <p>{formatTime(duration)}</p>
    </section>
  )
}
