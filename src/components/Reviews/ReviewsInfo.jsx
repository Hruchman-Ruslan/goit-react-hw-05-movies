const ReviewsInfo = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <h2>Author: {author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsInfo;
