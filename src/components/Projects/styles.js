import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  }
`;

export const Item = styled.li`
  a {
    display: block;

    img {
      width: 100%;
    }
  }
`;
