import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};
  transition: 0.2s;
`;

export const SquareGrid = styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;
`;

export const Square = styled.div`
  width: 33%;
  height: 33%;
  background-color: ${({ theme }) => theme.text.primary};
  float: left;
  animation: scale 1.3s infinite ease-in-out;
  border-radius: 2px;
  :nth-of-type(7) {
    animation-delay: 0s;
  }
  :nth-of-type(4),
  :nth-of-type(8) {
    animation-delay: 0.1s;
  }
  :nth-of-type(1),
  :nth-of-type(5),
  :nth-of-type(9) {
    animation-delay: 0.2s;
  }
  :nth-of-type(2),
  :nth-of-type(6) {
    animation-delay: 0.3s;
  }
  :nth-of-type(3) {
    animation-delay: 0.4s;
  }
  @keyframes scale {
    0%,
    70%,
    100% {
      transform: scale3D(1, 1, 1);
    }
    35% {
      transform: scale3D(0, 0, 1);
    }
  }
`;
