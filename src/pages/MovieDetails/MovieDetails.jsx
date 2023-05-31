import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/moviesApi';

import { GoBack, Loader, MovieInfo, Section } from 'components';
import { Item, List, StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError('Sorry something went wrong');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <Section>
      <GoBack path={goBack.current} />
      {movie && <MovieInfo {...movie} />}
      <List>
        <Item>
          <StyledLink to="cast">Cats</StyledLink>
        </Item>
        <Item>
          <StyledLink to={'reviews'}>Reviews</StyledLink>
        </Item>
      </List>
      {isLoading && <Loader />}
      <Outlet />
    </Section>
  );
};

export default MovieDetails;
