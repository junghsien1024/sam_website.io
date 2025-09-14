import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonContainer = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size, theme }) => {
    switch (size) {
      case "sm":
        return `${theme.spacing.sm} ${theme.spacing.md}`;
      case "lg":
        return `${theme.spacing.lg} ${theme.spacing["2xl"]}`;
      default:
        return `${theme.spacing.md} ${theme.spacing.xl}`;
    }
  }};
  font-size: ${({ size, theme }) => {
    switch (size) {
      case "sm":
        return theme.fontSizes.sm;
      case "lg":
        return theme.fontSizes.lg;
      default:
        return theme.fontSizes.base;
    }
  }};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  min-width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return `
          background: ${theme.colors.primary};
          color: white;
          border: 2px solid ${theme.colors.primary};
          
          &:hover {
            background: ${theme.colors.primaryDark};
            border-color: ${theme.colors.primaryDark};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.lg};
          }
        `;
      case "secondary":
        return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          
          &:hover {
            background: ${theme.colors.primary};
            color: white;
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.lg};
          }
        `;
      case "ghost":
        return `
          background: transparent;
          color: ${theme.colors.text};
          
          &:hover {
            background: ${theme.colors.surface};
            color: ${theme.colors.primary};
          }
        `;
      default:
        return `
          background: ${theme.colors.surface};
          color: ${theme.colors.text};
          border: 1px solid ${theme.colors.border};
          
          &:hover {
            background: ${theme.colors.primary};
            color: white;
            border-color: ${theme.colors.primary};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.lg};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const Button = ({
  children,
  variant = "default",
  size = "md",
  fullWidth = false,
  onClick,
  disabled = false,
  type = "button",
  ...props
}) => {
  return (
    <ButtonContainer
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
