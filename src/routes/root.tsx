import { createBrowserRouter } from 'react-router-dom'
import AdminPanel from '../modules/admin/AdminPanel'
import Categories from '../modules/admin/pages/categories/Categories'
import Posts from '../modules/admin/pages/posts/Posts'
import Products from '../modules/admin/pages/products/Products'
import Home from '../modules/common/home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin',
    element: <AdminPanel />,
    children: [
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'posts',
        element: <Posts />,
      },
    ],
  },
])

export default router
