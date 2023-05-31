import { Item, List, StyledLink } from './MoviesList.styled';
import PropTypes from 'prop-types';

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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
};
