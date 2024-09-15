import { FC } from 'react'

import Button from '@ui/button/Button'

import s from './ProductGridItems.module.scss'

interface ProductGridItem {
  title: string
  img: string
  price: string
}

const ProductGridItem: FC<ProductGridItem> = ({ title, img, price }) => {
  return (
    <div className={s.product_grid_item}>
      <div className={s.product_top}>
        <div className={s.product_image}>
          <a href="#">
            <img src={img} alt="#" />
          </a>
        </div>
      </div>
      <div className={s.product_bottom}>
        <div className={s.product_title}>
          <a href="#">{title}</a>
        </div>
        <div className={s.product_price}>£{price}</div>
        <Button className={`btn ${s.add_to_cart_btn}`}>Add to cart</Button>
      </div>
    </div>
  )
}

export default ProductGridItem
