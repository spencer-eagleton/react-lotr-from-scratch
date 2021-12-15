export default function BookList({ books }) {
  return (
    <section>
      {books.map((book) => (
        <div key={book.title}>{book.title}</div>
      ))}
    </section>
  );
}
