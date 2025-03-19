import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGraduationCap } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HeaderWrapper = styled(motion.header)<{ $scrolled: boolean; $isHomePage: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.header};
  background: ${({ $scrolled, $isHomePage, theme }) => 
    $scrolled || !$isHomePage ? theme.colors.primaryDark : 'transparent'};
  padding: ${({ $scrolled, theme }) => 
    $scrolled ? theme.spacing.sm : theme.spacing.md} 0;
  transition: all ${({ theme }) => theme.transitions.medium};
  box-shadow: ${({ $scrolled, $isHomePage, theme }) => 
    $scrolled || !$isHomePage ? theme.shadows.medium : 'none'};
  backdrop-filter: ${({ $scrolled, $isHomePage }) => 
    $scrolled || !$isHomePage ? 'blur(10px)' : 'none'};
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

const LogoText = styled.span`
  // Add any necessary styles for the LogoText component
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

const StyledLink = styled.a<{ $isActive?: boolean }>`
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

const RouterLink = styled(Link)<{ $isActive?: boolean }>`
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
  { href: '/#home', label: 'Home', isHashLink: true },
  { href: '/#about', label: 'About', isHashLink: true },
  { href: '/blog', label: 'Blog', isHashLink: false },
  { href: '/#testimonials', label: 'Testimonials', isHashLink: true },
  { href: '/#contact', label: 'Contact', isHashLink: true },
  { href: '/#subscribe', label: 'Subscribe', isHashLink: true },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine if we're on the home page
  const isHomePage = location.pathname === '/' || location.pathname === '';

  // Scroll to top when path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // When redirected to home with hash, scroll to that section
    if (isHomePage && location.hash) {
      const sectionId = location.hash.substring(1); // Remove # from the hash
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          const rect = section.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          window.scrollTo({
            top: scrollTop + rect.top - 80,
            behavior: 'smooth'
          });
        }, 100); // Short delay to ensure DOM is ready
      }
    }
  }, [location, isHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Don't update activeSection on blog pages
      if (isHomePage) {
        // Get all sections and determine which one is in view
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.getAttribute('id') || '');
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Set Blog as active section when on blog pages
  useEffect(() => {
    if (location.pathname.startsWith('/blog')) {
      setActiveSection('blog');
    } else if (isHomePage) {
      // Reset to detecting sections when back on home page
      handleScroll();
    }
  }, [location.pathname, isHomePage]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    // Only run section detection on homepage
    if (!isHomePage) return;
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        setActiveSection(section.getAttribute('id') || '');
      }
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    
    // Extract the section ID from the href
    const sectionId = href.split('#')[1];
    
    // If we're not on the home page, navigate to home with hash
    if (!isHomePage) {
      navigate(`/#${sectionId}`);
      return;
    }
    
    // We're on home page, just scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      window.scrollTo({
        top: scrollTop + rect.top - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
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
      $scrolled={isScrolled}
      $isHomePage={isHomePage}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <HeaderContainer>
        <Logo 
          as={Link}
          to="/"
          onClick={() => {
            closeMenu();
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          variants={logoVariants}
          initial="initial"
          animate="animate"
        >
          <LogoIcon>
            <FaGraduationCap />
          </LogoIcon>
          <LogoText>Independent Mathie</LogoText>
        </Logo>
        
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        
        <Nav $isOpen={isOpen}>
          <NavList>
            {navItems.map((item, index) => {
              // Check if this nav item should be active based on current path
              let isActive = false;
              if (item.isHashLink) {
                isActive = activeSection === item.href.split('#')[1];
              } else {
                // For non-hash links like /blog, check if current path starts with the item href
                isActive = location.pathname.startsWith(item.href);
              }
              
              return (
                <NavItem key={index}>
                  {item.isHashLink ? (
                    <StyledLink 
                      href={item.href} 
                      $isActive={isActive}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </StyledLink>
                  ) : (
                    <RouterLink 
                      to={item.href} 
                      $isActive={isActive}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </RouterLink>
                  )}
                </NavItem>
              );
            })}
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