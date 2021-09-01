import React from 'react';

import { Container, Title, Subtitle } from './styles';

export default function Hero({ texts }) {
	return (
		texts && (
			<Container>
				<Title>{texts.title}</Title>
				<Subtitle>{texts.subtitle}</Subtitle>
			</Container>
		)
	);
}
