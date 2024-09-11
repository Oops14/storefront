import { useState } from 'react'

import AddInfoButton from '../../../../components/buttons/AddInfoButton'
import AddCategoryPopup from '../../components/AddCategoryPopup'
import ListCategories from '../../components/ListCategories'
import style from './Categories.module.scss'

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <AddCategoryPopup setIsOpen={setIsOpen} />}
      <div className={style.admin_panel_categories}>
        <div className={style.page_title}>
          <h2>Create a category</h2>
          <AddInfoButton title="Add product" onClick={() => setIsOpen(true)} />
        </div>

        <ListCategories />
      </div>
    </>
  )
}

export default Dashboard
