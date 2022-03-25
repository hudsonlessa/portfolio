import React from 'react';

import InfiniteLights from '../InfiniteLights';
import { Background, Container, Subtitle, Title } from './styles';

export default function Hero({ texts, theme }) {
  return (
    <Container>
      <Background>
        <InfiniteLights />
      </Background>
      <Title>{texts.title}</Title>
      <Subtitle>{texts.subtitle}</Subtitle>
    </Container>
  );
}
