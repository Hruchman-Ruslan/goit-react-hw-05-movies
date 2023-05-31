import { Section } from 'components';
import gifDefault from '../../Gif/40Oj.gif';

export const MovieInfo = ({
  poster_path,
  release_date,
  original_title,
  title,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <Section>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
      ) : (
        <img src={gifDefault} alt={title} width={180} />
      )}
      <h2>
        {original_title} {release_date}
      </h2>
      <p>User Score {(vote_average * 10).toFixed()}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{genres.map(genre => genre.name).join(' ')}</p>
    </Section>
  );
};
