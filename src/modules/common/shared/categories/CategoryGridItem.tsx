import { FC } from 'react'

import s from './CategoryGridItem.module.scss'

interface CategoryGridItem {
  title: string
  img: string
  quantity: number
}

const CategoryGridItem: FC<CategoryGridItem> = ({ title, img, quantity }) => {
  return (
    <div className={s.category_item}>
      <div className={s.category_image}>
        <img src={img} alt="#" />
      </div>
      <div className={s.category_title}>
        {title} <span className="category_count">({quantity})</span>
      </div>
    </div>
  )
}

export default CategoryGridItem
