import React from 'react';

import { Container, Hint, LanguageSelector } from './styles';

export default function Header({ texts, handleLanguageClick }) {
  return (
    <Container>
      <LanguageSelector>
        <li>
          <button type="button" onClick={handleLanguageClick}>
            US
          </button>
        </li>
        <li>
          <button type="button" onClick={handleLanguageClick}>
            BR
          </button>
        </li>
      </LanguageSelector>
      <Hint>{texts.hint}</Hint>
    </Container>
  );
}
