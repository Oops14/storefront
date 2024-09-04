import { FC } from "react";
import Button from "../../../../ui/Button";
import style from "./Post.module.scss";

interface Post {
  title: string;
  description: string;
  img: string;
}

const Post: FC<Post> = ({ title, description, img }) => {
  return (
    <div className={style.post_item}>
      <div className={style.post_top}>
        <a href="#">
          <img src={img} alt="#" />
        </a>
      </div>
      <div className={style.post_bottom}>
        <div className={style.post_title}>
          <a href="#">{title}</a>
        </div>
        <div className={style.post_desk}>{description}</div>
        <Button className={`btn ${style.btn_alternative}`}>
          View this post →
        </Button>
      </div>
    </div>
  );
};

export default Post;
