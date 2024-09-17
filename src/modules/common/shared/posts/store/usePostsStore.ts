import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'

export interface Post {
  id: string
  title: string
  description: string
  img: string
}

interface PostsState {
  posts: Post[]
}

const usePostsStore = create<PostsState>((set) => ({
  posts: [
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
  ],
}))

export default usePostsStore
