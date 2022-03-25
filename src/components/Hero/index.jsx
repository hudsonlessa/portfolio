import React from 'react';

import { Container, Subtitle, Title } from './styles';

export default function Hero({ texts, theme }) {
  return (
    <Container>
      <Title>{texts.title}</Title>
      <Subtitle>{texts.subtitle}</Subtitle>
    </Container>
  );
}
