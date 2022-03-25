import styled from 'styled-components';

export const Container = styled.header`
  pointer-events: none;
  display: flex;
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 20px;
  font-size: 16px;

  @media (min-width: 768px) {
    padding: 40px 80px;
  }
`;

export const Hint = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: initial;
    user-select: none;
    margin-left: auto;
    font-family: 'Raleway';
    color: #c819ff;
  }
`;

export const LanguageSelector = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    + li {
      margin-left: 20px;
    }

    button {
      pointer-events: all;
      cursor: pointer;
      background-color: transparent;
      color: #fdfdfd;
      font-family: 'Raleway';
      font-size: 16px;

      @media (hover: hover) {
        :hover {
          color: #00ff99;
        }
      }

      :active {
        color: #00ff99;
      }
    }
  }
`;
