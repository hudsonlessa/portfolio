import styled from 'styled-components';

export const Container = styled.header`
  display: none;

  @media (min-width: 768px) {
    pointer-events: none;
    display: flex;
    position: absolute;
    z-index: 1;
    width: 100%;
    padding: 40px 80px;
    font-size: 18px;
  }
`;

export const Hint = styled.p`
  user-select: none;
  margin-left: auto;
  font-family: 'LTC Bodoni 175';
  color: #c819ff;
`;
