import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  :nth-child(2n + 1) {
    color: #10c7af;
  }

  :nth-child(2n) {
    color: #b44f0b;
  }

  transition-property: color, transform;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.3);
  }
`;

export const StyledLink = styled(Link)`
  font-size: 24px;

  border-bottom: 4px solid;
  background: transparent;
  border-image: linear-gradient(to right, #ff0000, #1000ff) 1 0%;

  :hover,
  :focus {
    filter: drop-shadow(0px 0px 30px #00ffff);
    border-bottom: none;
  }
`;
