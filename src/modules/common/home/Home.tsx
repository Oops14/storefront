import { Link } from 'react-router-dom'

import { v4 as uuidv4 } from 'uuid'
import Grid from '@mui/material/Grid2'

import Container from '@components/container/Container.tsx'

import DashboardTopPanel from '@modules/admin/components/AdminTopPanel'
import ProductGridItem from '@modules/products/ProductGridItem'

import CategoryGridItem from '@shared/categories/CategoryGridItem'
import useCategoriesStore from '@shared/categories/store/useCategoriesStore'
import Header from '@shared/header/Header'
import Post from '@shared/posts/Post'

import s from './Home.module.scss'

const products = [
  {
    id: uuidv4(),
    title: 'Woo Album #4',
    img: '../../../public/products/cd_5_flat.webp',
    price: '125',
  },
  {
    id: uuidv4(),
    title: 'Woo Album #4',
    img: '../../../public/products/hoodie_3_front.webp',
    price: '125',
  },
  {
    id: uuidv4(),
    title: 'Woo Album #4',
    img: '../../../public/products/T_5_front.webp',
    price: '125',
  },
  {
    id: uuidv4(),
    title: 'Woo Album #4',
    img: '../../../public/products/T_7_front.webp',
    price: '125',
  },
]
const posts = [
  {
    id: uuidv4(),
    title: 'Flying Ninja',
    description: 'This is a fantastic quality print and is happily hanging framed on my wall now.',
    img: '../../../public/poster_2_up.webp',
  },
  {
    id: uuidv4(),
    title: 'Flying Ninja',
    description: 'This is a fantastic quality print and is happily hanging framed on my wall now.',
    img: '../../../public/poster_2_up.webp',
  },
  {
    id: uuidv4(),
    title: 'Flying Ninja',
    description: 'This is a fantastic quality print and is happily hanging framed on my wall now.',
    img: '../../../public/poster_2_up.webp',
  },
  {
    id: uuidv4(),
    title: 'Flying Ninja',
    description: 'This is a fantastic quality print and is happily hanging framed on my wall now.',
    img: '../../../public/poster_2_up.webp',
  },
]

const Home = () => {
  const categories = useCategoriesStore((state) => state.categories)

  return (
    <>
      <DashboardTopPanel>
        <Link to="/admin/categories">Dashboard</Link>
      </DashboardTopPanel>
      <Header />

      <section className={s.categories}>
        <Container>
          <div className={s.section_title}>
            <h3>Product Categories</h3>
          </div>

          <Grid container spacing={5}>
            {categories.map((item, index) => {
              return (
                <Grid key={index} size={{ lg: 4, xs: 6, md: 6 }}>
                  <CategoryGridItem title={item.title} img={item.img} quantity={item.quantity} />
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </section>

      <section className={s.products_section}>
        <Container>
          <div className={s.section_title}>
            <h3>Products</h3>
          </div>

          <Grid container spacing={5}>
            {products.map((item, index) => {
              return (
                <Grid key={index} size={{ lg: 3, xs: 6, md: 6 }}>
                  <ProductGridItem title={item.title} img={item.img} price={item.price} />
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </section>

      <section className={s.posts_section}>
        <Container>
          <div className={s.section_title}>
            <h3>Posts</h3>
          </div>

          <Grid container spacing={5}>
            {posts.map((item, index) => {
              return (
                <Grid key={index} size={{ lg: 3, xs: 6, md: 6 }}>
                  <Post title={item.title} description={item.description} img={item.img} />
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Home
