import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { lightTheme, darkTheme } from '../themes';

export default function App() {
	const [currentTheme, setCurrentTheme] = useState(null);

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
		</ThemeProvider>
	);
}
