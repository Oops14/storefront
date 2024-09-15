import { FC } from 'react'

import BaseInput from '@ui/input/BaseInput'

interface EditableInputProps {
  defaultValue: string
  autoFocus: boolean
  editCategory: (newTitle: string) => void
  setEditedCategoryId: () => void
}

const EditableInput: FC<EditableInputProps> = ({ defaultValue, autoFocus, editCategory, setEditedCategoryId }) => {
  return (
    <BaseInput
      defaultValue={defaultValue}
      autoFocus={autoFocus}
      onBlur={(e) => {
        editCategory(e.target.value)
        setEditedCategoryId()
      }}
    />
  )
}

export default EditableInput
