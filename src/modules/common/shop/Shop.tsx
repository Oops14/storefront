import { Link } from 'react-router-dom'

import DashboardTopPanel from '@modules/admin/components/AdminTopPanel'

import Header from '@shared/header/Header'
import PageTitle from '@shared/pageTitle/PageTitle'

const Shop = () => {
  return (
    <>
      <DashboardTopPanel>
        <Link to="/admin/categories">Dashboard</Link>
      </DashboardTopPanel>

      <Header />

      <PageTitle>Shop</PageTitle>
    </>
  )
}

export default Shop
