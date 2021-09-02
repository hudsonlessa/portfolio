import styled from 'styled-components';

export const Container = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
`;

export const Title = styled.h1`
	text-transform: uppercase;
	font-family: 'Bebas Neue';
	font-size: 56px;
	font-weight: 400;
	color: #fff;
`;

export const Subtitle = styled.h2`
	font-family: 'Raleway';
	font-weight: 400;
	color: #fff;
`;

export const Video = styled.video`
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
