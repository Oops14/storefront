import { FC } from 'react'
import Button from '../ui/Button'

interface AddInfoButtonProps {
  title: string
  onClick: () => void
}

const AddInfoButton: FC<AddInfoButtonProps> = ({ title, onClick }) => {
  return <Button onClick={onClick}>{title}</Button>
}

export default AddInfoButton
