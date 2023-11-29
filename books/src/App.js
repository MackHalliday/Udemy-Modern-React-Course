import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([{ title: "Test Title 1", id: 1 }]);
  const [numBooks, setNumBooks] = useState(1);

  const createBook = (title) => {
    let nextBookId = numBooks + 1;
    setBooks([...books, { title: title, id: nextBookId }]);
    setNumBooks(nextBookId);
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

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return (book.id !== id) 
    });
    setBooks(updatedBooks)
  }

  return (
    <div className="app">
      <div>
        <BookList books={books} onEdit={updateBookById} onDelete={deleteBookById} />
      </div>
      <div>
        <BookCreate onCreate={createBook} />
      </div>
    </div>
  );
}

export default App;
