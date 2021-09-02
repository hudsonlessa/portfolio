import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import GlobalStyle from './styles/global';
import texts from './texts.json';
import { darkTheme, lightTheme } from './themes';

export default function App() {
	const [currentTexts, setCurrentTexts] = useState(null);
	const [currentTheme, setCurrentTheme] = useState(null);

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

	if (!currentTheme || !currentTexts) {
		return null;
	}

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyle />
			<main>
				<Hero texts={currentTexts} theme={currentTheme} />
				<Contact
					texts={currentTexts}
					links={texts.links}
					theme={currentTheme}
				/>
			</main>
			<Footer />
		</ThemeProvider>
	);
}
