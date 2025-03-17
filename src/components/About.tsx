import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { FaGraduationCap, FaUserGraduate, FaAward } from 'react-icons/fa';

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    opacity: 0.2;
    z-index: -1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(11, 38, 30, 0.1),
      rgba(11, 38, 30, 0.4)
    );
    z-index: 1;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.md};
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  z-index: 2;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  
  ${AboutImage}:hover & {
    transform: translateY(0);
  }
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

const AboutContent = styled(motion.div)`
  h3 {
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
    font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 80px;
      height: 3px;
      background: ${({ theme }) => theme.colors.accent};
      border-radius: ${({ theme }) => theme.borderRadius.small};
    }
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.8;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.light}, white);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  border: 1px solid rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const StatIcon = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  svg {
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
`;

const stats = [
  { 
    icon: <FaGraduationCap />,
    number: '10+', 
    label: 'Years Experience' 
  },
  { 
    icon: <FaUserGraduate />,
    number: '500+', 
    label: 'Students Helped' 
  },
  { 
    icon: <FaAward />,
    number: '95%', 
    label: 'Grade Improvement' 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const About = () => {
  return (
    <Section id="about" background="accent" compact>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Independent Mathie
      </motion.h2>
      <AboutGrid>
        <AboutImage
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop" 
            alt="Mathematics tutor helping a student"
          />
          <ImageOverlay>
            <h4>Passionate About Teaching</h4>
            <p>Helping students discover the beauty of mathematics</p>
          </ImageOverlay>
        </AboutImage>
        <AboutContent
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3>Experienced Mathematics Educator</h3>
          <p>
            With over 10 years of experience in mathematics education, I provide expert tutoring focused on deep understanding rather than memorization. My approach builds mathematical intuition and critical thinking skills through personalized lessons tailored to each student's needs.
          </p>
          
          <StatsGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <StatItem key={index} variants={itemVariants}>
                <StatIcon>{stat.icon}</StatIcon>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </AboutContent>
      </AboutGrid>
    </Section>
  );
}; 