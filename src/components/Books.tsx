import React, { useState } from "react";
import { booksSelectors, bookAdded, bookRemoved } from "../slices/booksSlice";
import { useDispatch, useSelector } from "react-redux";

interface Props {}

const Books = (props: Props) => {
  const [count, setCount] = useState(0);
  const allBooks = useSelector(booksSelectors.selectAll);
  const dispatch = useDispatch();
  return (
    <div>
      <h5>Books</h5>
      <button
        onClick={() => {
          setCount(count + 1);
          dispatch(
            bookAdded({ id: `${count}`, title: `book ${count.toString()}` })
          );
        }}
      >
        Add a book
      </button>
      <h4>Book Title</h4>
      {allBooks &&
        allBooks.map((book, index) => {
          return (
            <div key={index}>
              <h5
                onClick={() => {
                  dispatch(bookRemoved(book.id));
                }}
              >
                {book.title}
              </h5>
            </div>
          );
        })}
    </div>
  );
};

export default Books;
