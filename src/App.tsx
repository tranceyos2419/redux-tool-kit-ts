import React, { Dispatch } from "react";
import Counter from "./components/Counter";
import Push from "./components/Push";
import Post from "./components/Post";
import Books from "./components/Books";
import { useDispatch } from "react-redux";
import { init } from "./slices/postSlice";

function App() {
  // const dispatch = useDispatch();
  // initPost(dispatch);

  return (
    <div className="App">
      <h2>App</h2>
      <Counter />
      <Books />
      <Push />
      <Post />
    </div>
  );
}

export default App;

const initPost = (dispatch: Dispatch<any>) => {
  fetch(`https://jsonplaceholder.typicode.com/posts`).then(res =>
    res.json().then(data => {
      dispatch(init({ posts: data }));
    })
  );
};
