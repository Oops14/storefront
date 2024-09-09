import { Button } from '@mui/material'
import { useId, useState } from 'react'
import AddInfoButton from '../../../../components/AddInfoButton'
import ImageInput from '../../../../components/ImageInput'
import useCategoriesStore from '../../../common/shared/categories/store/useCategoriesStore'
import Popup from '../../../common/shared/popup/Popup'
import style from './Categories.module.scss'

const Dashboard = () => {
  const itemId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [categoryTitle, setCategoryTitle] = useState('')

  const categories = useCategoriesStore((state) => state.categories)
  const addNewCategory = useCategoriesStore((state) => state.addCategory)

  const handleImageChange = (imageFile: File | null) => {
    if (imageFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(imageFile)
    } else {
      setSelectedImage(null)
    }
  }

  const handlePopup = () => {
    setIsOpen(true)
  }

  console.log(itemId)

  const handleData = () => {
    const categoryItem = {
      id: itemId,
      title: categoryTitle,
      img: selectedImage || '',
      quantity: 0,
    }

    if (categoryTitle.length && selectedImage) {
      addNewCategory(categoryItem)
      setIsOpen(false)
    }
  }

  return (
    <>
      {isOpen && (
        <Popup setIsOpen={setIsOpen}>
          {/* Custom content passed as children */}
          <h5>Define a category title</h5>
          <input type="text" onChange={(e) => setCategoryTitle(e.currentTarget.value)} />

          <h5>Upload an Image</h5>
          <ImageInput classNameDivInput="some-class" onImageChange={handleImageChange} />

          {selectedImage && <p>Image file selected</p>}

          <Button className="btn" onClick={handleData}>
            Add category
          </Button>
        </Popup>
      )}
      <div className={style.admin_panel_categories}>
        <div className={style.page_title}>
          <h2>Create a category</h2>
          <AddInfoButton title="Add product" onClick={handlePopup} />
        </div>

        <ul>
          {categories.map((i) => {
            return <li key={itemId}>{i.title}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Dashboard
