import React, { useEffect, useRef, useState } from 'react';

import { Container, Square, SquareGrid } from './styles';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const container = useRef(null);

  const bodyStyle = document.body.style;
  const containerStyle = container.current?.style;

  const squareQuantity = 9;

  const handleLoad = () => setIsLoading(false);

  useEffect(() => {
    window.addEventListener('pageshow', handleLoad);

    bodyStyle.overflow = 'hidden';

    return () => window.removeEventListener('pageshow', handleLoad);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    bodyStyle.overflow = 'initial';
    containerStyle.opacity = 0;

    setTimeout(() => {
      containerStyle.display = 'none';
    }, 200);
  }, [isLoading]);

  return (
    <Container ref={container}>
      <SquareGrid>
        {[...Array(squareQuantity)].map((e, i) => (
          <Square key={i} />
        ))}
      </SquareGrid>
    </Container>
  );
}
