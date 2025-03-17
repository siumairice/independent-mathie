import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from './Button';

const HeroWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(rgba(11, 38, 30, 0.92), rgba(11, 38, 30, 0.92)), 
              url('https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=2940&auto=format&fit=crop') center/cover;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
    z-index: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  z-index: 2;
  position: relative;
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: white;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: left;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.2;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  
  span {
    color: ${({ theme }) => theme.colors.accent};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: ${({ theme }) => theme.colors.accent};
      opacity: 0.3;
      z-index: -1;
    }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.lightGray};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeroButton = styled(Button)`
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 600;
  
  &.secondary {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.white};
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle at center, ${({ theme }) => theme.colors.accent}22, transparent 70%);
  z-index: 0;
  
  &.shape1 {
    top: 10%;
    left: 5%;
    width: 400px;
    height: 400px;
  }
  
  &.shape2 {
    bottom: 10%;
    right: 5%;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle at center, ${({ theme }) => theme.colors.primary}22, transparent 70%);
  }
`;

export const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };
  
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as "reverse",
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <HeroWrapper id="home">
      <FloatingShape 
        className="shape1" 
        initial="initial"
        animate="animate"
        variants={floatingAnimation}
      />
      <FloatingShape 
        className="shape2" 
        initial="initial"
        animate="animate"
        variants={{
          initial: { y: 0 },
          animate: {
            y: [0, 20, 0],
            transition: {
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse" as "reverse",
              ease: "easeInOut"
            }
          }
        }}
      />
      <Container>
        <HeroContent>
          <HeroTitle
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            Unlock Your <span>Mathematical</span> Potential
          </HeroTitle>
          <HeroSubtitle
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}
          >
            Personalized mathematics tutoring for students of all levels. Build confidence, improve grades, and develop a deeper understanding of mathematics.
          </HeroSubtitle>
          <ButtonGroup
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <HeroButton as="a" href="#contact">
              Join now
            </HeroButton>
            <HeroButton as="a" href="#blog" className="secondary">
              Explore Resources
            </HeroButton>
          </ButtonGroup>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
}; 