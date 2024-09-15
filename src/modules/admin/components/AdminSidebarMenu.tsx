import { useState } from 'react'
import { Link } from 'react-router-dom'

import s from '../Admin.module.scss'

const dashboardMenu = [
  { title: 'Categories', path: 'categories' },
  { title: 'Products', path: 'products' },
  { title: 'Posts', path: 'posts' },
]

const AdminSidebarMenu = () => {
  const [activeLink, setActiveLink] = useState(dashboardMenu[0]?.path)

  const handleLinkClick = (path: string) => {
    setActiveLink(path)
  }

  return (
    <ul className={s.admin_sidebar_menu}>
      {dashboardMenu.map((i) => (
        <li key={i.path} className={activeLink === i.path ? s.active_menu : ''} onClick={() => handleLinkClick(i.path)}>
          <Link to={i.path}>{i.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default AdminSidebarMenu
