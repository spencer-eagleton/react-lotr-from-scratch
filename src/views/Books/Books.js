import BookList from '../../components/Books/BookList';
import { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/books';
export default function Books() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Books</h1>
      <BookList books={data} />
    </div>
  );
}
