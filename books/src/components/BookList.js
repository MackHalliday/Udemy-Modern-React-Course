import BookShow from "./BookShow";

function BookList({ books, editBook }) {
  const renderBooks = books.map((book) => {
    return <BookShow title={book.title} id={book.id} editBook={editBook} />;
  });

  return <div className="book-list"> {renderBooks} </div>;
}

export default BookList;
