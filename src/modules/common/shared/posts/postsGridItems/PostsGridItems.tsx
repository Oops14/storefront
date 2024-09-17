import { FC } from 'react'

import Post from '../Post'
import { Post as PostType } from '../store/usePostsStore'

interface PostsGridItems {
  posts: PostType[]
}

const PostsGridItems: FC<PostsGridItems> = ({ posts }) => {
  return (
    <>
      {posts.length ? (
        posts.map((post) => <Post key={post.id} title={post.title} description={post.description} img={post.img} />)
      ) : (
        <div>No posts available.</div>
      )}
    </>
  )
}

export default PostsGridItems
