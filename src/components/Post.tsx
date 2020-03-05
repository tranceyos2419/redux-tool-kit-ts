import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPost, add } from "../slices/postSlice";

interface Props {}

const Post: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const post = useSelector(selectPost);

  const getPost = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.length + 1}`
    );
    const data = await res.json();
    dispatch(add({ post: data }));
  };

  return (
    <div>
      <h3>Post</h3>
      <button onClick={() => getPost()}>Get Post</button>
    </div>
  );
};

export default Post;
