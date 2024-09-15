import { useState } from 'react'

import AddInfoButton from '../../../../components/buttons/AddInfoButton'
import AddCategoryPopup from '../../components/AddCategoryPopup'
import ListCategories from '../../components/listCategories/ListCategories'
import Typography from '@components/typography/Typography'

import useCategoriesStore from '../../../common/shared/categories/store/useCategoriesStore'

import s from './Categories.module.scss'

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false)

  const categories = useCategoriesStore((state) => state.categories)
  const { removeCategory, editCategory } = useCategoriesStore()

  return (
    <>
      {isOpen && <AddCategoryPopup setIsOpen={setIsOpen} />}
      <div className={s.admin_panel_categories}>
        <div className={s.page_title}>
          <Typography tag="h2">Create a category</Typography>

          <AddInfoButton title="Add category" onClick={() => setIsOpen(true)} />
        </div>

        <ListCategories categories={categories} removeCategory={removeCategory} editCategory={editCategory} />
      </div>
    </>
  )
}

export default Categories
