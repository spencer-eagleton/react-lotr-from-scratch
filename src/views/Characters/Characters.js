import { useEffect, useState } from 'react';
import CharacterList from '../../components/Characters/CharacterList';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <CharacterList characters={data} />
    </div>
  );
}
