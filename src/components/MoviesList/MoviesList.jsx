import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  // console.log(movies);
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
