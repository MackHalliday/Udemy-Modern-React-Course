import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          placeholder="Enter title of book"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
