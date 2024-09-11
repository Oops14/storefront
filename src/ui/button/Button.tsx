import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick?: () => void
}

const Button: FC<Button> = ({ children, onClick, ...props }) => {
  return (
    <button className={props.className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
