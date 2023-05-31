import { Item, List, ReviewText, ReviewTitle } from './ReviewsInfo.styled';

export const ReviewsInfo = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ id, content, author }) => (
        <Item key={id}>
          <ReviewTitle>Author: {author}</ReviewTitle>
          <ReviewText>{content}</ReviewText>
        </Item>
      ))}
    </List>
  );
};
