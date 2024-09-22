import { Link } from 'react-router-dom'

import { v4 as uuidv4 } from 'uuid'

import Typography from '@components/typography/Typography'

import DashboardTopPanel from '@modules/admin/components/AdminTopPanel'
import ProductGridItems from '@modules/products/productGridItems/ProductGridItems'

import CategoryGridItem from '@shared/categories/CategoryGridItem'
import useCategoriesStore from '@shared/categories/store/useCategoriesStore'
import Header from '@shared/header/Header'
import PostsGridItems from '@shared/posts/postsGridItems/PostsGridItems'
import Container from '@shared/container/Container'
import Grid from '@shared/grid/Grid'
import usePostsStore from '@shared/posts/store/usePostsStore'

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

const Home = () => {
  const categories = useCategoriesStore((state) => state.categories)
  const posts = usePostsStore((state) => state.posts)

  return (
    <>
      <DashboardTopPanel>
        <Link to="/admin/categories">Dashboard</Link>
      </DashboardTopPanel>
      <Header />

      <section className={s.categories}>
        <Container>
          <Typography tag="h3" className={s.section_title}>
            Product Categories
          </Typography>

          <Grid columns={3}>
            {categories.map((item) => (
              <CategoryGridItem key={item.id} title={item.title} img={item.img} quantity={item.quantity} />
            ))}
          </Grid>
        </Container>
      </section>

      <section className={s.products_section}>
        <Container>
          <Typography tag="h3" className={s.section_title}>
            Products
          </Typography>

          <Grid>
            <ProductGridItems products={products} />
          </Grid>
        </Container>
      </section>

      <section className={s.posts_section}>
        <Container>
          <Typography tag="h3" className={s.section_title}>
            Posts
          </Typography>

          <Grid>
            <PostsGridItems posts={posts} />
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Home
