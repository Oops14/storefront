import { Link } from 'react-router-dom'

import s from '../Header.module.scss'

const headerMenu = [
  { title: 'Home', path: '/' },
  { title: 'Blog', path: '/blog' },
  { title: 'Shop', path: '/shop' },
]

const HeaderMenu = () => {
  return (
    <ul className={s.header_menu}>
      {headerMenu.map((i, index) => {
        return (
          <li key={index} className={s.header_list_item}>
            <Link to={i.path} className={s.list_item_link}>
              {i.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderMenu
