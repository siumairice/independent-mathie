import styled from 'styled-components';

interface SectionProps {
  background?: 'light' | 'dark' | 'white' | 'gradient1' | 'gradient2' | 'pattern' | 'accent';
  id?: string;
  children: React.ReactNode;
  compact?: boolean;
}

const StyledSection = styled.section<{ 
  $background?: 'light' | 'dark' | 'white' | 'gradient1' | 'gradient2' | 'pattern' | 'accent';
  $compact?: boolean 
}>`
  padding: ${({ theme, $compact }) => $compact ? `${theme.spacing.lg} 0` : `${theme.spacing.xxl} 0`};
  width: 100%;
  background: ${({ theme, $background }) => {
    switch ($background) {
      case 'light':
        return theme.colors.light;
      case 'dark':
        return theme.colors.primaryDark;
      case 'gradient1':
        return `linear-gradient(135deg, ${theme.colors.primaryDark}, ${theme.colors.primary})`;
      case 'gradient2':
        return `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent}40)`;
      case 'pattern':
        return `${theme.colors.light} url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='${encodeURIComponent(theme.colors.primary)}10' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`;
      case 'accent':
        return `linear-gradient(135deg, ${theme.colors.accent}30, ${theme.colors.accent}10)`;
      case 'white':
      default:
        return theme.colors.white;
    }
  }};
  position: relative;
  color: ${({ theme, $background }) =>
    $background === 'dark' || $background === 'gradient1' 
    ? theme.colors.white 
    : theme.colors.dark};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${({ $background }) => 
      $background === 'pattern' ? '100%' : '0'};
    background: ${({ theme }) => 
      `linear-gradient(to bottom, ${theme.colors.primary}05, transparent)`};
    z-index: 0;
  }

  h2 {
    text-align: center;
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
    font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
    margin-bottom: ${({ theme, $compact }) => $compact ? theme.spacing.lg : theme.spacing.xl};
    color: ${({ theme, $background }) =>
      $background === 'dark' || $background === 'gradient1' 
      ? theme.colors.white 
      : theme.colors.primary};
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: ${({ theme }) => theme.colors.accent};
      margin: ${({ theme }) => theme.spacing.sm} auto 0;
      border-radius: ${({ theme }) => theme.borderRadius.small};
    }
  }

  p {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};
    color: ${({ theme, $background }) =>
      $background === 'dark' || $background === 'gradient1' 
      ? theme.colors.lightGray 
      : theme.colors.gray};
    position: relative;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const Section = ({ background, id, children, compact }: SectionProps) => {
  return (
    <StyledSection $background={background} $compact={compact} id={id}>
      <Container>{children}</Container>
    </StyledSection>
  );
};
