import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPost, add, init } from "../slices/postSlice";

interface Props {}

const Post: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  console.log("posts:", posts);

  const getPost = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${posts.length + 1}`
    );
    const data = await res.json();
    dispatch(add({ post: data }));
  };

  return (
    <div>
      <h3>Post</h3>
      <button onClick={() => getPost()}>Get Post</button>
      {posts &&
        posts.map((post: { title: string; body: string }) => (
          <div>
            <h2>{post.title} </h2>
            <h5>{post.body} </h5>
          </div>
        ))}
    </div>
  );
};

export default Post;
