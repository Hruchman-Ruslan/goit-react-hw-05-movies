import { Item, List, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
        </Item>
      ))}
    </List>
  );
};
