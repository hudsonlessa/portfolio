import styled from 'styled-components';

export const Container = styled.section`
  min-height: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

export const Title = styled.h1`
  pointer-events: none;
  user-select: none;
  z-index: 0;
  margin-top: 10px;
  text-transform: uppercase;
  font-family: 'Azo Sans Uber';
  font-size: 32px;
  font-weight: 400;
  color: #fdfdfd;

  @media (min-width: 768px) {
    margin-top: 24px;
    font-size: 80px;
  }
`;

export const Subtitle = styled.h2`
  pointer-events: none;
  user-select: none;
  z-index: 0;
  font-family: 'LTC Bodoni 175';
  font-size: 24px;
  font-weight: 400;
  color: #00ff99;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
