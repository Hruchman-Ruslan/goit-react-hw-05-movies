import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Item = styled.li`
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  padding: 0.5rem;

  border: 4px solid transparent;
  background: linear-gradient(#000000, #000000) padding-box,
    linear-gradient(
        to right,
        rgba(196, 20, 195, 1) 12%,
        rgba(0, 255, 255, 1) 33%,
        rgba(29, 11, 28, 1) 61%
      )
      border-box;
`;

export const ReviewTitle = styled.h2`
  font-weight: 900;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6,
    0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
`;

export const ReviewText = styled.p`
  font-size: 24px;
  color: #2fa1ec;
`;
