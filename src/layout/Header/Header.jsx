import {
  HeaderWrapp,
  List,
  Navigation,
  Item,
  StyledLink,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapp>
      <Navigation>
        <List>
          <Item>
            <StyledLink to="/">Home</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/movies">Movies</StyledLink>
          </Item>
        </List>
      </Navigation>
    </HeaderWrapp>
  );
};
