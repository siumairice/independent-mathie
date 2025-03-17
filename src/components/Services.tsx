import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaChalkboardTeacher, FaLaptop, FaUserGraduate } from 'react-icons/fa';
import { Section } from './Section';

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform ${({ theme }) => theme.transitions.medium},
              box-shadow ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.75rem;
  transition: background-color ${({ theme }) => theme.transitions.fast};

  ${ServiceCard}:hover & {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
`;

const services = [
  {
    icon: <FaChalkboardTeacher />,
    title: 'One-on-One Tutoring',
    description: 'Personalized math instruction tailored to your learning style and pace. Master concepts with undivided attention and targeted guidance.',
  },
  {
    icon: <FaLaptop />,
    title: 'Online Sessions',
    description: 'Flexible virtual tutoring using interactive tools and digital resources. Learn from anywhere with real-time collaboration and support.',
  },
  {
    icon: <FaUserGraduate />,
    title: 'Exam Preparation',
    description: 'Comprehensive preparation for standardized tests and exams. Build confidence with practice problems and proven test-taking strategies.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Services = () => {
  return (
    <Section id="services">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <IconWrapper>{service.icon}</IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Section>
  );
}; 