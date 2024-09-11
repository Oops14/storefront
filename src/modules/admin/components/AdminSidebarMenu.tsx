import { useState } from 'react'
import { Link } from 'react-router-dom'

import style from '../Admin.module.scss'

const dashboardMenu = [
  { title: 'Categories', path: 'categories' },
  { title: 'Products', path: 'products' },
  { title: 'Posts', path: 'posts' },
]

const AdminSidebarMenu = () => {
  const [activeLink, setActiveLink] = useState(dashboardMenu[0].path)

  const handleLinkClick = (path: string) => {
    setActiveLink(path)
  }

  return (
    <ul className={style.admin_sidebar_menu}>
      {dashboardMenu.map((item, index) => {
        return (
          <li
            key={index}
            className={activeLink === item.path ? style.active_menu : ''}
            onClick={() => handleLinkClick(item.path)}>
            <Link to={`${item.path}`}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default AdminSidebarMenu
