export default function CharacterList({ characters }) {
  return (
    <section>
      {characters.map((character) => (
        <div key={character.name}>{character.name}</div>
      ))}
    </section>
  );
}
