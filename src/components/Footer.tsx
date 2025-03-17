import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaRss, FaEnvelope, FaMapMarkerAlt, FaPhone, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const FooterWrapper = styled.footer`
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.primaryDark}, ${({ theme }) => `${theme.colors.primary}ee`});
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md} 0 10px;
  position: relative;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const FooterSection = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
    font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.accent};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }

  p {
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.lightGray};
    margin-bottom: 4px;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, auto));
  column-gap: 5px;
  row-gap: 1px;

  li {
    margin-bottom: 1px;
  }

  a {
    color: ${({ theme }) => theme.colors.lightGray};
    text-decoration: none;
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    transition: all ${({ theme }) => theme.transitions.fast};
    display: inline-flex;
    align-items: center;
    
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      transform: translateX(3px);
    }
    
    &::before {
      content: "›";
      margin-right: 2px;
      font-size: 1.2em;
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  
  svg {
    color: ${({ theme }) => theme.colors.accent};
    margin-right: 6px;
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;

  a {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 1.2rem;
    transition: all ${({ theme }) => theme.transitions.fast};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.05);
    
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.accent};
      transform: translateY(-2px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 8px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.typography.small.fontSize};
  opacity: 0.8;
`;

const BackToTop = styled.button<{ $visible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? 0.9 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(20px)')};
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  
  &:hover {
    opacity: 1;
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  &:focus {
    outline: none;
  }
`;

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <h3>Independent Mathie</h3>
          <p>
            Mathematics tutoring services and educational resources to help students excel.
          </p>
          <SocialLinks>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="RSS Feed">
              <FaRss />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#subscribe">Subscribe</a></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Contact</h3>
          <ContactItem>
            <FaMapMarkerAlt />
            <p>San Francisco, CA</p>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <p>contact@independentmathie.com</p>
          </ContactItem>
          <ContactItem>
            <FaPhone />
            <p>(555) 123-4567</p>
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} Independent Mathie. All rights reserved.</p>
      </Copyright>
      
      <BackToTop 
        $visible={showBackToTop} 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </BackToTop>
    </FooterWrapper>
  );
}; 