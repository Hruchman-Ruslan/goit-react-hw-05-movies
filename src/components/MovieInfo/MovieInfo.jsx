import PropTypes from 'prop-types';

import {
  Genres,
  GenresText,
  Img,
  Overview,
  OverviewText,
  Score,
  Section,
  TitleInfo,
} from 'components';
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
        <Img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
      ) : (
        <Img src={gifDefault} alt={title} width={180} />
      )}
      <TitleInfo>
        {original_title} {release_date}
      </TitleInfo>
      <Score>User Score {(vote_average * 10).toFixed()}%</Score>
      <Overview>Overview</Overview>
      <OverviewText>{overview}</OverviewText>
      <Genres>Genres</Genres>
      <GenresText>{genres.map(genre => genre.name).join(' ')}</GenresText>
    </Section>
  );
};

MovieInfo.propTypes = {
  movies: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};
