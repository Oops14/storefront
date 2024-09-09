import Grid from '@mui/material/Grid2'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import style from './AdminPanel.module.scss'
import DashboardTopPanel from './AdminTopPanel'

const dashboardMenu = [
  { title: 'Categories', path: 'categories' },
  { title: 'Products', path: 'products' },
  { title: 'Posts', path: 'posts' },
]

const Dashboard = () => {
  const [] = useState()
  const [activeLink, setActiveLink] = useState(dashboardMenu[0].path)

  const handleLinkClick = (path: string) => {
    setActiveLink(path)
  }

  return (
    <>
      <DashboardTopPanel>View Site</DashboardTopPanel>
      <div className={style.main_dashbaord}>
        <Grid container spacing={2}>
          <Grid size={{ lg: 2, xs: 6, md: 4 }}>
            <div className={style.admin_sidebar}>
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
            </div>
          </Grid>
          <Grid size={{ lg: 10, xs: 6, md: 8 }}>
            <div>
              <Outlet />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Dashboard
