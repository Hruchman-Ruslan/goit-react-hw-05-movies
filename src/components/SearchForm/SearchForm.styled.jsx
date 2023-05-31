import styled from '@emotion/styled';

export const Form = styled.form``;

export const Label = styled.label`
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  gap: 40px;
  padding: 40px;

  filter: drop-shadow(0px 0px 20px #a201ff);
`;

export const Input = styled.input`
  border: 4px solid transparent;
  background: linear-gradient(#0cccda, #198eac) padding-box,
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

export const Button = styled.button`
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
