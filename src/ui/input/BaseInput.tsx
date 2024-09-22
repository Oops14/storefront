import { FC, InputHTMLAttributes } from 'react'

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const BaseInput: FC<BaseInputProps> = ({ ...props }) => {
  return <input type="text" {...props} />
}

export default BaseInput
