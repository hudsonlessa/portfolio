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
    font-size: 16px;
  }
`;

export const Hint = styled.p`
  user-select: none;
  margin-left: auto;
  font-family: 'Raleway';
  color: #c819ff;
`;

export const LanguageSelector = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: 'Raleway';
  color: #fdfdfd;

  li {
    pointer-events: all;
    cursor: pointer;

    :hover {
      color: #00ff99;
    }

    + li {
      margin-left: 20px;
    }
  }
`;
