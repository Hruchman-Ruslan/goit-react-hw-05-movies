import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/moviesApi';

import { Loader, ReviewsInfo, Section } from 'components';

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
      {reviews.length !== 0 ? (
        <ReviewsInfo reviews={reviews} />
      ) : (
        <p>We, don't have any reviews for this movie.</p>
      )}
      {isLoading && <Loader />}
    </Section>
  );
};

export default Reviews;
