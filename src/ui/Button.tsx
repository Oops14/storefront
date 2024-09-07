import React, { FC } from 'react'

interface Button {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const Button: FC<Button> = ({ children, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
