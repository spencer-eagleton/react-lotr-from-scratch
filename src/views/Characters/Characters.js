import { useEffect, useState } from 'react';
import CharacterList from '../../components/Characters/CharacterList';
import { fetchCharacters } from '../../services/characters';
import Controls from '../../components/Controls/Controls';

export default function Characters() {
  const [data, setData] = useState([]);
  const [selectedRace, setSelectedRace] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(selectedRace);
      setData(data);
    };
    fetchData();
  }, [selectedRace]);

  return (
    <div>
      <h1>Characters</h1>
      <Controls selectedRace={selectedRace} setSelectedRace={setSelectedRace} />
      <CharacterList characters={data} />
    </div>
  );
}
