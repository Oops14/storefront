import { FC } from 'react'

import Button from '@ui/button/Button'

import s from './Post.module.scss'

interface Post {
  title: string
  description: string
  img: string
}

const Post: FC<Post> = ({ title, description, img }) => {
  return (
    <div className={s.post_item}>
      <div className={s.post_top}>
        <a href="#">
          <img src={img} alt="#" />
        </a>
      </div>
      <div className={s.post_bottom}>
        <div className={s.post_title}>
          <a href="#">{title}</a>
        </div>
        <div className={s.post_desk}>{description}</div>
        <Button className={`btn ${s.btn_alternative}`}>View this post →</Button>
      </div>
    </div>
  )
}

export default Post
