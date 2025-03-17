import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGraduationCap } from 'react-icons/fa';

const HeaderWrapper = styled(motion.header)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.header};
  background: ${({ $scrolled, theme }) => 
    $scrolled ? theme.colors.primaryDark : 'transparent'};
  padding: ${({ $scrolled, theme }) => 
    $scrolled ? theme.spacing.sm : theme.spacing.md} 0;
  transition: all ${({ theme }) => theme.transitions.medium};
  box-shadow: ${({ $scrolled, theme }) => 
    $scrolled ? theme.shadows.medium : 'none'};
  backdrop-filter: ${({ $scrolled }) => 
    $scrolled ? 'blur(10px)' : 'none'};
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
`;

const LogoIcon = styled.div`
  margin-right: ${({ theme }) => theme.spacing.xs};
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background: ${({ theme }) => `linear-gradient(135deg, ${theme.colors.primaryDark}, ${theme.colors.primary})`};
    padding: ${({ theme }) => theme.spacing.xl};
    transform: ${({ $isOpen }) => 
      $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform ${({ theme }) => theme.transitions.medium};
    box-shadow: ${({ $isOpen }) => 
      $isOpen ? '-5px 0 25px rgba(0, 0, 0, 0.15)' : 'none'};
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(10px);
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavItem = styled.li`
  margin-left: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: ${({ theme }) => theme.spacing.md} 0;
    width: 100%;
  }
`;

const NavLink = styled.a<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.accent : theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${({ $isActive }) => ($isActive ? '80%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateX(-50%);
    transition: width ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    
    &::after {
      width: 80%;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    padding: ${({ theme }) => theme.spacing.sm};
    width: 100%;
    
    &::after {
      bottom: auto;
      top: 50%;
      left: 0;
      width: 3px;
      height: ${({ $isActive }) => ($isActive ? '70%' : '0')};
      transform: translateY(-50%);
      transition: height ${({ theme }) => theme.transitions.fast};
    }
    
    &:hover::after {
      width: 3px;
      height: 70%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.1);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Overlay = styled(motion.div)<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 999;
`;

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#blog', label: 'Blog' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <HeaderWrapper 
      $scrolled={scrolled}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <HeaderContainer>
        <Logo 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          variants={logoVariants}
          initial="initial"
          animate="animate"
        >
          <LogoIcon>
            <FaGraduationCap />
          </LogoIcon>
          <span>Independent Mathie</span>
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        
        <Nav $isOpen={isOpen}>
          <NavList>
            {navItems.map((item) => (
              <NavItem key={item.href}>
                <NavLink 
                  href={item.href} 
                  onClick={closeMenu}
                  $isActive={activeSection === item.href.substring(1)}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Nav>
        
        <AnimatePresence>
          {isOpen && (
            <Overlay 
              $isOpen={isOpen} 
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </HeaderContainer>
    </HeaderWrapper>
  );
}; 