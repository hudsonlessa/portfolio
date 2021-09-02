import styled from 'styled-components';

export const Container = styled.section`
	padding: 40px 20px;
	margin: 50px 0;
	background-color: ${({ theme }) => theme.background.primary};
`;

export const Question = styled.p`
	font-family: 'Bebas Neue';
	font-weight: 400;
	text-transform: uppercase;
	text-align: center;
	color: ${({ theme }) => theme.text.secondary};

	@media (min-width: 768px) {
		font-size: 32px;
	}
`;

export const CallToAction = styled.a`
	display: block;
	margin-top: 10px;
	font-family: 'Raleway';
	font-weight: 700;
	font-size: 24px;
	text-align: center;
	color: ${({ theme }) => theme.text.primary};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	@media (min-width: 768px) {
		font-size: 96px;
	}
`;
