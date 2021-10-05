import React from 'react';
import { GitHub as GitHubIcon, Linkedin as LinkedInIcon } from 'react-feather';

import { CallToAction, Container, Question, SocialMedias } from './styles';

export default function Contact({ texts, links, theme }) {
  return (
    <Container>
      <Question>{texts.question}</Question>
      <CallToAction href={`mailto:${texts.emailAddress}`}>
        {texts.callToAction}
      </CallToAction>
      <SocialMedias>
        <li>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon color={theme.text.primary} size={32} />
          </a>
        </li>
        <li>
          <a href={links.github} target="_blank" rel="noreferrer">
            <GitHubIcon color={theme.text.primary} size={32} />
          </a>
        </li>
      </SocialMedias>
    </Container>
  );
}
