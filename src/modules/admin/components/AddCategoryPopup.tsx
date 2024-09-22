import { FC, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import ImageInput from '@components/inputs/imageInput/ImageInput'
import Typography from '@components/typography/Typography'

import Button from '@ui/button/Button'
import BaseInput from '@ui/input/BaseInput'

import useCategoriesStore from '@modules/common/shared/categories/store/useCategoriesStore'
import Popup from '@modules/common/shared/popup/Popup'

interface AddCategoryPopup {
  setIsOpen: (isOpen: boolean) => void
}

const AddCategoryPopup: FC<AddCategoryPopup> = ({ setIsOpen }) => {
  const [selectedImage, setSelectedImage] = useState('')
  const [categoryTitle, setCategoryTitle] = useState('')
  const addCategory = useCategoriesStore((state) => state.addCategory)

  const handleImageChange = (imageFile: File | null) => {
    if (imageFile) {
      const reader = new FileReader()

      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setSelectedImage(reader.result)
        }
      }

      reader.readAsDataURL(imageFile)
    }

    setSelectedImage('')
  }

  const handleData = () => {
    if (!selectedImage) return

    const categoryItem = {
      id: uuidv4(),
      title: categoryTitle,
      img: selectedImage,
      quantity: 0,
    }

    if (categoryTitle.trim().length) {
      addCategory(categoryItem)
      setIsOpen(false)
    }
  }

  return (
    <Popup setIsOpen={setIsOpen}>
      <Typography tag="h2">Define a category title</Typography>
      <BaseInput onChange={(e) => setCategoryTitle(e.currentTarget.value)} />

      <h5>Upload an Image</h5>
      <ImageInput className="image_input" onImageChange={handleImageChange} />

      {selectedImage && <p>Image file selected</p>}

      <Button className="btn" onClick={handleData}>
        Add category
      </Button>
    </Popup>
  )
}

export default AddCategoryPopup
