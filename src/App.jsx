import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import projectsData from './projectsData';
import GlobalStyle from './styles/global';
import texts from './texts.json';
import { darkTheme } from './themes';

export default function App() {
  const trackingId = 'UA-127796749-1';

  ReactGA.initialize(trackingId);
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [currentTexts, setCurrentTexts] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    setCurrentTexts(texts.english);
    setCurrentTheme(darkTheme);
  }, []);

  const handleLanguageClick = (e) => {
    const countryCode = e.target.innerHTML;

    switch (countryCode) {
      case 'US':
        setCurrentTexts(texts.english);
        break;
      case 'BR':
        setCurrentTexts(texts.portuguese);
        break;
      default:
        break;
    }
  };

  if (!currentTheme || !currentTexts) {
    return null;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header texts={currentTexts} handleLanguageClick={handleLanguageClick} />
      <main>
        <Hero texts={currentTexts} />
        <Projects projectsData={projectsData} />
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
