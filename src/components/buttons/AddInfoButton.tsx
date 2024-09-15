import { ButtonHTMLAttributes, FC } from 'react'

import Button from '@ui/button/Button'

interface AddInfoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

const AddInfoButton: FC<AddInfoButtonProps> = ({ title, ...props }) => {
  return <Button onClick={props.onClick}>{title}</Button>
}

export default AddInfoButton
