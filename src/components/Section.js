import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SectionContainer = styled(motion.section)`
  padding: ${({ theme, padding }) => padding || `${theme.spacing["4xl"]} 0`};
  background: ${({ theme, background }) =>
    background || theme.colors.background};

  /* Fallback for when animations don't load */
  @media (prefers-reduced-motion: reduce) {
    opacity: 1 !important;
    transform: none !important;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const SectionHeader = styled.div`
  text-align: ${({ align }) => align || "center"};
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto;
`;

const Section = ({
  title,
  subtitle,
  children,
  background,
  padding,
  align,
  ...props
}) => {
  return (
    <SectionContainer
      background={background}
      padding={padding}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      {...props}
    >
      <SectionContent>
        {(title || subtitle) && (
          <SectionHeader align={align}>
            {title && <SectionTitle>{title}</SectionTitle>}
            {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
          </SectionHeader>
        )}
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
