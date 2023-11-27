import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([{title:"Chicken", index: 1}]);

  const createBook = (title) => {
    let numBooks = books.length
    setBooks([...books, {title:title, index:(numBooks+1)}]);
  };

  return (
    <div>
      <div> <BookList books={books}/></div>
      <div>
        <BookCreate onCreate={createBook} />
      </div>
    </div>
  );
}

export default App;
