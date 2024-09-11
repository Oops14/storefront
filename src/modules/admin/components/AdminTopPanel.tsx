import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import style from '../Admin.module.scss'

interface DashboardTopPanel {
  children: ReactNode
}

const DashboardTopPanel: FC<DashboardTopPanel> = ({ children }) => (
  <div className={style.dash_top_panel}>
    <div className="container">
      <ul className={style.top_panel_menu}>
        <li>
          <Link to="/admin/categories">{children}</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default DashboardTopPanel
