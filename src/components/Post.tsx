import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPost, init, fetchPost } from "../slices/postSlice";

interface Props {}

const Post: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);

  return (
    <div>
      <h3>Post</h3>
      <button onClick={() => dispatch(fetchPost(posts.length + 1))}>
        Get Post
      </button>
      {posts &&
        posts.map((post: { title: string; body: string }, index) => (
          <div key={index}>
            <h2>{post.title} </h2>
            <h5>{post.body} </h5>
          </div>
        ))}
    </div>
  );
};

export default Post;
