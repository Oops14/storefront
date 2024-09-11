import { FC } from 'react'

import Button from '../../ui/button/Button'
import style from './ProductGridItems.module.scss'

interface ProductGridItem {
  title: string
  img: string
  price: string
}

const ProductGridItem: FC<ProductGridItem> = ({ title, img, price }) => {
  return (
    <div className={style.product_grid_item}>
      <div className={style.product_top}>
        <div className={style.product_image}>
          <a href="#">
            <img src={img} alt="#" />
          </a>
        </div>
      </div>
      <div className={style.product_bottom}>
        <div className={style.product_title}>
          <a href="#">{title}</a>
        </div>
        <div className={style.product_price}>£{price}</div>
        <Button className={`btn ${style.add_to_cart_btn}`}>Add to cart</Button>
      </div>
    </div>
  )
}

export default ProductGridItem
