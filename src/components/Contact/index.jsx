import React from 'react';

import { Container, Question, CallToAction } from './styles';

export default function Contact({ texts }) {
	return (
		texts && (
			<Container>
				<Question>{texts.question}</Question>
				<CallToAction href="mailto:contato@hudsonlessa.com">
					{texts.callToAction}
				</CallToAction>
			</Container>
		)
	);
}
