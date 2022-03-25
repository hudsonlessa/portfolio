import React from 'react';

import InfiniteLights from '../InfiniteLights';
import { Background, Container, Subtitle, Title } from './styles';

export default function Hero({ texts }) {
  return (
    <Container>
      <Background>
        <InfiniteLights />
      </Background>
      <Subtitle>{texts.subtitle}</Subtitle>
      <Title>{texts.title}</Title>
    </Container>
  );
}
