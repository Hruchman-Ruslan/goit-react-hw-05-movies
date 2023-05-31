import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapp = styled.header`
  width: 100%;
  height: 70px;

  padding-top: 20px;
  padding-bottom: 20px;

  border: 4px solid transparent;
  border-top: 0px;
  background: linear-gradient(#000000, #000000) padding-box,
    linear-gradient(
        to right,
        rgba(196, 20, 195, 1) 12%,
        rgba(0, 255, 255, 1) 33%,
        rgba(29, 11, 28, 1) 61%
      )
      border-box;

  background-size: 400%;
  animation: gradient 10s infinite reverse;

  @keyframes gradient {
    0% {
      background-position: 80% 0%;
    }
    50% {
      background-position: 20% 100%;
    }
    100% {
      background-position: 80% 0%;
    }
  }
`;

export const Navigation = styled.nav`
  height: 100%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  height: 100%;
`;

export const Item = styled.li`
  :first-of-type {
    color: #d8a63b;

    transition-property: color, transform;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
      transform: scale(1.3);
    }
  }

  :last-child {
    color: #0eb34d;

    transition-property: color, transform;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
      transform: scale(1.3);
    }
  }
`;

export const StyledLink = styled(Link)`
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6,
    0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  :hover,
  :focus {
    filter: drop-shadow(0px 0px 30px #00ffff);
  }
`;
