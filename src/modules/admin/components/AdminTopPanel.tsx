import { FC, ReactNode } from 'react'

import s from '../Admin.module.scss'

interface DashboardTopPanel {
  children: ReactNode
}

const DashboardTopPanel: FC<DashboardTopPanel> = ({ children }) => (
  <div className={s.dash_top_panel}>
    <ul className={s.top_panel_menu}>
      <li>{children}</li>
    </ul>
  </div>
)

export default DashboardTopPanel
