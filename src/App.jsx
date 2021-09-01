import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import texts from './texts.json';
import { lightTheme, darkTheme } from './themes';

import Hero from './components/Hero';

export default function App() {
	const [currentTexts, setCurrentTexts] = useState(null);
	const [currentTheme, setCurrentTheme] = useState(lightTheme);

	useEffect(() => {
		setCurrentTexts(texts.portuguese);
	}, []);

	useEffect(() => {
		const today = new Date();
		const currentHour = today.getHours();

		if (currentHour >= 6 && currentHour < 18) {
			setCurrentTheme(lightTheme);
		} else {
			setCurrentTheme(darkTheme);
		}
	}, []);

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyle />
			<main>
				<Hero texts={currentTexts} />
			</main>
		</ThemeProvider>
	);
}
