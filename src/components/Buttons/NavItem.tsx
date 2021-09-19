import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface Props {
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
  icon: IconProp
  title: string
}

const NavItem = ({ title, onClick, className, style, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-28 h-24 border bg-white opacity-70 rounded-lg hover:opacity-100 transition-opacity duration-500 rounded-bl-none rounded-tr-none ${className}`}
      style={style}
    >
      <FontAwesomeIcon icon={icon} className="text-xl mb-3" />
      <h3 className="font-semibold uppercase">{title}</h3>
    </button>
  )
}

export default NavItem