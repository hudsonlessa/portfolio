import React from 'react';

import { Container, Hint, LanguageSelector } from './styles';

export default function Header({ texts }) {
  return (
    <Container>
      <LanguageSelector>
        <li>US</li>
        <li>BR</li>
      </LanguageSelector>
      <Hint>{texts.hint}</Hint>
    </Container>
  );
}
