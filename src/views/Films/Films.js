import { useEffect, useState } from 'react';
import FilmList from '../../components/Films/FilmList';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Films</h1>
      <FilmList films={data} />
    </div>
  );
}
