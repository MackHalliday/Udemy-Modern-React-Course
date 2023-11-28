import { useState } from "react";

function BookEdit({ title, id, editBook }) {
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    editBook(newTitle, id);
    setNewTitle("");
  };

  return (
    <div className="book-edit" id={id}>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter new title"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button className="buttom" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
