/* eslint-disable react/no-unknown-property */
import useFetchData from "../../Hooks/useFetchData";
import Style from "./Posts.module.css";
import Post from "../Post/Post";
import { useState } from "react";

export default function Posts() {
  const { data: posts, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [showAll, setShowAll] = useState(false);
  const showPosts = showAll ? posts : posts.slice(0, 12);
  return (
    <div className={Style.postWrapper}>
      <div className={Style.heading}>
        <h1>Posts</h1>
      </div>
      <div className={Style.posts}>
        {posts.length > 1 ? (
          showPosts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <h1 className={Style.error}>{error}</h1>
        )}
      </div>
      {posts.length > 0 && (
        <div className={Style.showBtn}>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
}
