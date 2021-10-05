import styled from 'styled-components';

export const Container = styled.section`
	padding: 100px 20px;
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

export const SocialMedias = styled.ul`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	list-style-type: none;

	@media (min-width: 768px) {
		margin-top: 40px;
	}

	li + li {
		margin-left: 20px;
	}
`;
