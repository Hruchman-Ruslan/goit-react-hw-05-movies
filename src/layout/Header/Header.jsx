import { Link } from 'react-router-dom';

import { HeaderWrapp, List } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapp>
      <nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </List>
      </nav>
    </HeaderWrapp>
  );
};
