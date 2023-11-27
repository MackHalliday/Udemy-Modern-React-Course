function BookShow({ title, index }) {
  return (
    <div className="book-show" key={index}>
      <h2>{title}</h2>
    </div>
  );
}

export default BookShow;
