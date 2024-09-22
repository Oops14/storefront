import { Link, Outlet } from 'react-router-dom'

import Grid from '@mui/material/Grid2'

import AdminSidebarMenu from './components/AdminSidebarMenu'
import DashboardTopPanel from './components/AdminTopPanel'

import s from './Admin.module.scss'

const Dashboard = () => (
  <>
    <DashboardTopPanel>
      <Link to="/">View Site</Link>
    </DashboardTopPanel>
    <div className={s.main_dashbaord}>
      <Grid container spacing={2}>
        <Grid size={{ lg: 2, xs: 6, md: 4 }}>
          <div className={s.admin_sidebar}>
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
