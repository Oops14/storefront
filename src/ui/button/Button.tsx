import { FC, ReactNode } from 'react'

interface Button {
  children: ReactNode
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
