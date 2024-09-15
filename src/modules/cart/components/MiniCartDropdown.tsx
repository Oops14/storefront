import { FC } from 'react'

import s from '../Cart.module.scss'

interface MiniCartDropdown {
  isVisible: boolean
}

const MiniCartDropdown: FC<MiniCartDropdown> = ({ isVisible }) => {
  return (
    <div className={`${s.mini_cart_dropdown} ${isVisible ? `${s.visible}` : ''}`}>
      <div>Your Cart is Empty</div>
    </div>
  )
}

export default MiniCartDropdown
