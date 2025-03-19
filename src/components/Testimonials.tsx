import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { FaQuoteLeft, FaStar, FaGraduationCap } from 'react-icons/fa';

const TestimonialsHeader = styled(motion.div)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  
  p {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.accent};
  opacity: 0.2;
  font-size: 2rem;
`;

const TestimonialContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  font-style: italic;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.7;
  font-size: 1rem;
  z-index: 1;
`;

const RatingStars = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: #FFD700;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(0,0,0,0.05);
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorDetails = styled.div`
  h4 {
    font-size: 1rem;
    margin: 0 0 ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
  
  p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.gray};
    margin: 0;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: ${({ theme }) => theme.spacing.xs};
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const TestimonialBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  left: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => `rgba(${parseInt(theme.colors.accent.slice(1, 3), 16)}, ${parseInt(theme.colors.accent.slice(3, 5), 16)}, ${parseInt(theme.colors.accent.slice(5, 7), 16)}, 0.1)`};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.75rem;
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const testimonials = [
  {
    content:
      "My daughter struggled with calculus until she started working with Independent Mathie. The personalized approach and clear explanations helped her gain confidence and improve her grades significantly. She now actually enjoys math!",
    author: "Sarah Johnson",
    role: "Parent of High School Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    subject: "Calculus",
  },
  {
    content:
      "As someone who always had math anxiety, I was hesitant to seek help. Independent Mathie created a supportive environment where I felt comfortable asking questions. The step-by-step approach helped me finally understand algebra concepts I'd struggled with for years.",
    author: "Michael Chen",
    role: "College Freshman",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    subject: "Algebra",
  },
  {
    content:
      "I needed to pass a statistics course for my degree, but was completely lost. The tutoring I received was exceptional - complex concepts were broken down into manageable parts, and real-world examples made everything click. I ended up with an A in the course!",
    author: "Jessica Martinez",
    role: "Graduate Student",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5,
    subject: "Statistics",
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Testimonials = () => {
  return (
    <Section background="accent" id="testimonials">
      <TestimonialsHeader
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2>Student Success Stories</motion.h2>
        <motion.p>
          Don't just take my word for it. Here's what students and parents have to say about their experience with Independent Mathie's tutoring services.
        </motion.p>
      </TestimonialsHeader>
      
      <TestimonialsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} variants={cardVariants}>
            <TestimonialBadge>{testimonial.subject}</TestimonialBadge>
            <QuoteIcon>
              <FaQuoteLeft />
            </QuoteIcon>
            <RatingStars>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={16} color={i < testimonial.rating ? "#FFD700" : "#e0e0e0"} />
              ))}
            </RatingStars>
            <TestimonialContent>{testimonial.content}</TestimonialContent>
            <AuthorInfo>
              <AuthorImage>
                <img src={testimonial.image} alt={testimonial.author} />
              </AuthorImage>
              <AuthorDetails>
                <h4>{testimonial.author}</h4>
                <p>
                  <FaGraduationCap size={12} />
                  {testimonial.role}
                </p>
              </AuthorDetails>
            </AuthorInfo>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </Section>
  );
}; 