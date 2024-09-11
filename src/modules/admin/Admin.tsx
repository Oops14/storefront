import Grid from '@mui/material/Grid2'
import { Outlet } from 'react-router-dom'

import style from './Admin.module.scss'
import AdminSidebarMenu from './components/AdminSidebarMenu'
import DashboardTopPanel from './components/AdminTopPanel'

const Dashboard = () => (
  <>
    <DashboardTopPanel>View Site</DashboardTopPanel>
    <div className={style.main_dashbaord}>
      <Grid container spacing={2}>
        <Grid size={{ lg: 2, xs: 6, md: 4 }}>
          <div className={style.admin_sidebar}>
            <AdminSidebarMenu />
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

export default Dashboard
