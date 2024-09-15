import { useState } from 'react'

import MiniCartDropdown from './MiniCartDropdown'

import s from '../Cart.module.scss'

const MiniCart = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={s.mini_cart_container}
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}>
      <a href="#" className={s.mini_cart}>
        <span>0.00$</span>
        <span className={s.item_counter}>0 items</span>
      </a>

      {isHovered && <MiniCartDropdown isVisible={isHovered} />}
    </div>
  )
}

export default MiniCart
