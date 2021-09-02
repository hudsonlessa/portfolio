import React from 'react';

import { Container, Text } from './styles';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<Container>
			<Text>{currentYear}</Text>
		</Container>
	);
}
