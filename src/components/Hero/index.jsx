import React from 'react';

import { Container, Subtitle, Title, Video } from './styles';

export default function Hero({ texts, theme }) {
	return (
		<Container>
			<Video src={theme.video} poster autoPlay muted loop playsInline />
			<Title>{texts.title}</Title>
			<Subtitle>{texts.subtitle}</Subtitle>
		</Container>
	);
}
