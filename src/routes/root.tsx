import { createBrowserRouter } from 'react-router-dom'

import Admin from '@modules/admin/Admin'
import Categories from '@modules/admin/pages/categories/Categories'
import Posts from '@modules/admin/pages/posts/Posts'
import Products from '@modules/admin/pages/products/Products'
import Home from '@modules/common/home/Home'
import Blog from '@modules/common/blog/Blog.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/admin',
    element: <Admin />,
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
