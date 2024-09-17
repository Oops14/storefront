import { Link } from 'react-router-dom'

import DashboardTopPanel from '@modules/admin/components/AdminTopPanel'

import Header from '@shared/header/Header.tsx'
import Container from '@shared/container/Container'
import PageTitle from '@shared/pageTitle/PageTitle'
import Post from '@shared/posts/Post'
import Grid from '@shared/grid/Grid'
import usePostsStore from '@shared/posts/store/usePostsStore'

import s from './Blog.module.scss'

const Blog = () => {
  const posts = usePostsStore((state) => state.posts)

  return (
    <>
      <DashboardTopPanel>
        <Link to="/admin/categories">Dashboard</Link>
      </DashboardTopPanel>

      <Header />

      <PageTitle>Blog</PageTitle>

      <Container>
        <Grid>
          {posts.map((i) => {
            return <Post key={i.id} title={i.title} description={i.description} img={i.img} />
          })}
        </Grid>
      </Container>
    </>
  )
}

export default Blog
