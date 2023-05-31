import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  max-width: 240px;
  margin: auto;
  color: #a201ff;

  padding: 8px;

  border: 2px solid purple;
  border-radius: 8px;

  filter: drop-shadow(0px 0px 20px #00ffff);

  transition-property: color, transform;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    filter: drop-shadow(0px 0px 20px #a201ff);
    color: #a201ff;
    border: 2px solid #00ffff;
    transform: scale(1.3);
  }

  animation: glow 5s ease-in-out infinite;

  @keyframes glow {
    0%,
    100% {
      color: aqua;
      text-shadow: 0 0 12px aqua, 0 0 50px aqua, 0 0 100px aqua;
    }
    10%,
    90% {
      color: #a201ff;
      text-shadow: none;
    }
  }
`;
