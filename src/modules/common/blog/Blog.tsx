import { Link } from 'react-router-dom'

import DashboardTopPanel from '@modules/admin/components/AdminTopPanel'

import Header from '@shared/header/Header.tsx'
import Container from '@shared/container/Container'
import PageTitle from '@shared/pageTitle/PageTitle'
import PostsGridItems from '@shared/posts/postsGridItems/PostsGridItems'
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

      <div className={s.blog_main}>
        <Container>
          <Grid>
            <PostsGridItems posts={posts} />
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Blog
