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
  text-transform: uppercase;
  font-family: 'Bebas Neue';
  font-size: 56px;
  font-weight: 400;
  color: #fdfdfd;

  @media (min-width: 768px) {
    font-size: 144px;
  }
`;

export const Subtitle = styled.h2`
  font-family: 'Raleway';
  font-size: 16px;
  font-weight: 400;
  color: #fdfdfd;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Video = styled.video`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
