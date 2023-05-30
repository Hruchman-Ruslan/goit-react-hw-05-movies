const CastInfo = ({ movie }) => {
  return (
    <ul>
      {movie.map(({ id, character, original_name, profile_path }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={original_name}
          />
          <h2>{original_name}</h2>
          <p>Character:{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastInfo;
