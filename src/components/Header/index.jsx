import React from 'react';

import { Container, Hint } from './styles';

export default function Header({texts}) {
  return (
    <Container>
      <Hint>{texts.hint}</Hint>
    </Container>
  );
}
