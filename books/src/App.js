import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([{ title: "Chicken", id: 1 }]);

  const createBook = (title) => {
    let numBooks = books.length;
    setBooks([...books, { title: title, id: numBooks + 1 }]);
  };

  const updateBookById = (newTitle, id) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div>
      <div>
        {" "}
        <BookList books={books} editBook={updateBookById} />
      </div>
      <div>
        <BookCreate onCreate={createBook} />
      </div>
    </div>
  );
}

export default App;
