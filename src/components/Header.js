import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.lg};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.text};
  font-weight: ${({ active }) => (active ? "600" : "400")};
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: ${({ active }) => (active ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ExternalLink = styled.a`
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.text};
  font-weight: ${({ active }) => (active ? "600" : "400")};
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: ${({ active }) => (active ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { to: "/", label: "Introduction" },
    { to: "/work", label: "Work Experience" },
    { to: "/portfolio", label: "Portfolio" },
    {
      href: "https://www.linkedin.com/in/sam-wei-cornell/",
      label: "Contact",
      external: true,
    },
  ];

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/" onClick={closeMobileMenu}>
          Sam Wei
        </Logo>

        <NavLinks isOpen={isMobileMenuOpen}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;

            if (item.external) {
              return (
                <ExternalLink
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  active={isActive}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </ExternalLink>
              );
            }

            return (
              <NavLink
                key={item.label}
                to={item.to}
                active={isActive}
                onClick={closeMobileMenu}
              >
                {item.label}
              </NavLink>
            );
          })}
        </NavLinks>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
