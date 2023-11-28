import BookEdit from "./BookEdit";

function BookShow({ title, id, editBook }) {
  return (
    <div className="book-show" id={id}>
      <h2>{title}</h2>
      <BookEdit title={title} id={id} editBook={editBook} />
    </div>
  );
}

export default BookShow;
