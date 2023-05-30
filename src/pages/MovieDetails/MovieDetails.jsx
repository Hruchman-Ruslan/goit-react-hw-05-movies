import { getMovieDetails } from 'api/moviesApi';
import { Section } from 'components';
import GoBack from 'components/GoBack/GoBack';
import { Loader } from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

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
        // console.log(data);
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
      <Link to="cast">Cats</Link>
      <Link to="reviews">Reviews</Link>
      {isLoading && <Loader />}
      <Outlet />
    </Section>
  );
};

export default MovieDetails;
