import type { ReactElement, ReactNode } from "react"
import "./button.css"

interface IButtonProps {
  icon: ReactNode
}
export const Button = ({ icon }: IButtonProps): ReactElement => {
  return (
    <div>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
  )
}
