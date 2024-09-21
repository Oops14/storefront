import { FC } from 'react'

import ProductGrid, { ProductGrid as ProductGridType } from '../ProductGrid'

interface ProductGridItems {
  products: ProductGridType[]
}

const ProductGridItems: FC<ProductGridItems> = ({ products }) => {
  return (
    <>
      {products.map((item) => (
        <ProductGrid key={item.id} title={item.title} img={item.img} price={item.price} />
      ))}
    </>
  )
}

export default ProductGridItems
