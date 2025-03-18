import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return css`
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: ${theme.typography.small.fontSize};
        `;
      case 'large':
        return css`
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: calc(${theme.typography.body.fontSize} * 1.125);
        `;
      default:
        return css`
          padding: ${theme.spacing.sm} ${theme.spacing.lg};
          font-size: ${theme.typography.body.fontSize};
        `;
    }
  }}

  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background: ${theme.colors.secondary};
          color: ${theme.colors.white};

          &:hover {
            background: ${theme.colors.accent};
            transform: translateY(-2px);
          }

          &:active {
            transform: translateY(0);
          }
        `;
      case 'outline':
        return css`
          background: transparent;
          border: 2px solid ${theme.colors.primary};
          color: ${theme.colors.primary};

          &:hover {
            background: ${theme.colors.accent};
            color: ${theme.colors.white};
            transform: translateY(-2px);
          }

          &:active {
            transform: translateY(0);
          }
        `;
      default:
        return css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};

          &:hover {
            background: ${theme.colors.accent};
            transform: translateY(-2px);
          }

          &:active {
            transform: translateY(0);
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  & > * + * {
    margin-left: ${({ theme }) => theme.spacing.xs};
  }
`; 