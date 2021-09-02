import React from 'react';

import { Container, Title, Subtitle, Video } from './styles';

export default function Hero({ texts, theme }) {
	return (
		texts && (
			<Container>
				{theme && <Video src={theme.video} autoPlay muted loop playsInline />}
				<Title>{texts.title}</Title>
				<Subtitle>{texts.subtitle}</Subtitle>
			</Container>
		)
	);
}
