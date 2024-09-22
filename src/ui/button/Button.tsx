import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<Button> = ({ children, ...props }) => {
  return (
    <button className={props.className} onClick={props.onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
