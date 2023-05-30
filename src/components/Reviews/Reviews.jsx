import { getMovieReviews } from 'api/moviesApi';
import { Section } from 'components';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsInfo from './ReviewsInfo';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError('Sorry something went wrong');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <Section>
      <ReviewsInfo reviews={reviews} />
      {isLoading && <Loader />}
    </Section>
  );
};

export default Reviews;
