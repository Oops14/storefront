import { useState } from 'react'

import Typography from '@components/typography/Typography'
import AddInfoButton from '@components/buttons/AddInfoButton.tsx'

import AddCategoryPopup from '@modules/admin/components/AddCategoryPopup.tsx'
import ListCategories from '@modules/admin/components/listCategories/ListCategories.tsx'

import useCategoriesStore from '@shared/categories/store/useCategoriesStore.ts'

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
