import styled from 'styled-components';

export const Container = styled.footer`
	padding: 20px 0;

	background-color: ${({ theme }) => theme.background.secondary};
`;

export const Text = styled.p`
	font-family: 'Bebas Neue';
	text-align: center;
	color: ${({ theme }) => theme.text.primary};
`;
