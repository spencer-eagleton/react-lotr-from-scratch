export default function FilmList({ films }) {
  return (
    <section>
      {films.map((film) => (
        <div
          key={film.title}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/films/${film.title}.jpeg)` }}
        >
          {film.title}
        </div>
      ))}
    </section>
  );
}
