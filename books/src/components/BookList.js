// import { useState } from "react";
import BookShow from "./BookShow";

function BookList({ books }) {
  const renderBooks = books.map((book) => {
    return <BookShow title={book.title} key={book.index} />;
  });

  return <div className="book-list"> {renderBooks} </div>;
}

export default BookList;
