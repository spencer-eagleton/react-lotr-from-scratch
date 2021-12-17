export default function Controls({ selectedRace, setSelectedRace }) {
  return (
    <div>
      <select value={selectedRace} onChange={(e) => setSelectedRace(e.target.value)}>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
    </div>
  );
}
