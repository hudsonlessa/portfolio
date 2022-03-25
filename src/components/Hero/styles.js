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
  font-family: 'Bebas Neue';
  font-size: 64px;
  font-weight: 400;
  color: #fdfdfd;

  @media (min-width: 768px) {
    margin-top: 24px;
    font-size: 128px;
  }
`;

export const Subtitle = styled.h2`
  pointer-events: none;
  user-select: none;
  z-index: 0;
  font-family: 'Raleway';
  font-size: 16px;
  font-weight: 400;
  color: #00ff99;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
