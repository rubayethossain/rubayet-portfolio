import React, { CSSProperties } from "react"

interface Props {
  icon: string
  title: string
  className?: string
  style?: CSSProperties
}

const BoxIconTag = ({ icon, title, className, style }: Props) => {
  return (
    <div
      className={`w-24 h-24 border-2 border-gray-700 rounded overflow-hidden flex flex-col ${
        className || ""
      }`}
      style={style}
    >
      <div className="flex-1 flex flex-col justify-center px-2">
        <img
          src={icon}
          alt={title}
          className="max-h-12 block mx-auto max-w-full self-baseline"
        />
      </div>

      <p className="text-center border-gray-700 font-semibold bg-gray-700 text-white">
        {title}
      </p>
    </div>
  )
}

export default BoxIconTag
