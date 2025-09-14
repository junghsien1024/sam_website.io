import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing["2xl"]} 0;
  margin-top: ${({ theme }) => theme.spacing["4xl"]};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/sam-wei-cornell/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            💼
          </SocialLink>
          <SocialLink
            href="https://github.com/junghsien1024"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            🐙
          </SocialLink>
          <SocialLink href="mailto:weijunghsien@gmail.com" aria-label="Email">
            ✉️
          </SocialLink>
        </SocialLinks>
        <FooterText>
          © 2025 Sam Wei. All rights reserved. Built with React & Styled
          Components.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
