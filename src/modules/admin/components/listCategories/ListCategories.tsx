import { FC, useState } from 'react'

import EditableInput from '@components/inputs/editableInput/EditableInput'

import edit_icon from '@assets/img/icons8-edit.svg'
import trash_icon from '@assets/img/icons8-trash.svg'

import { Category } from '@modules/common/shared/categories/store/useCategoriesStore'

import s from '../../Admin.module.scss'

interface ListCategories {
  categories: Category[]
  removeCategory: (categoryId: string) => void
  editCategory: (title: string, categoryId: string) => void
}

const ListCategories: FC<ListCategories> = ({ categories, removeCategory, editCategory }) => {
  // Store the id of the category being edited
  const [editedCategoryId, setEditedCategoryId] = useState<string>('')

  return (
    <ul>
      {categories.map((i) => {
        const isBeingEdited = editedCategoryId === i.id

        return (
          <li className={s.list_cat_item} key={i.id}>
            {isBeingEdited ? (
              <EditableInput
                defaultValue={i.title}
                autoFocus
                editCategory={(newTitle) => editCategory(newTitle, i.id)}
                setEditedCategoryId={() => setEditedCategoryId('')}
              />
            ) : (
              i.title
            )}

            <div className={s.list_block_icons}>
              <span
                className={s.icon_span}
                onClick={() => setEditedCategoryId(i.id)} // Set the current category to edit mode
              >
                <img className={s.img_icon} src={edit_icon} alt="Edit" />
              </span>
              <span
                className={s.icon_span}
                onClick={() => removeCategory(i.id)} // Remove category
              >
                <img className={s.img_icon} src={trash_icon} alt="Delete" />
              </span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ListCategories
