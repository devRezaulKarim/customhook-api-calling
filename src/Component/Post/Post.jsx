/* eslint-disable react/prop-types */
import Style from "./Post.module.css";
export default function Post({ post }) {
  const { title, body } = post;
  return (
    <div className={Style.post}>
      <h3 className={Style.title}>{title.slice(0, 30)}</h3>
      <p className={Style.body}>{body.slice(0, 200)}</p>
    </div>
  );
}
