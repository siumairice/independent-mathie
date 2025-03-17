import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import { Section } from './Section';

const SubscriptionWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const SubscriptionTitle = styled(motion.h3)`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const SubscriptionDescription = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.lightGray};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const SubscriptionForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentLight});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    z-index: 1;
  }
  
  &:focus-within::before {
    transform: scaleX(1);
  }
`;

const EmailIcon = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.grayLight};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.xl};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.focus};
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayLight};
  }
`;

const SubscribeButton = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  
  svg {
    font-size: 0.9em;
  }
  
  &:hover {
    background: ${({ theme }) => theme.colors.accentDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background: ${({ theme }) => theme.colors.grayLight};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.success};
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing.md};
  background: rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  backdrop-filter: blur(5px);
  
  svg {
    font-size: 1.2rem;
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at center, ${({ theme }) => theme.colors.accent}22, transparent 70%);
  z-index: 0;
  
  &.shape1 {
    top: -100px;
    left: -150px;
    width: 300px;
    height: 300px;
  }
  
  &.shape2 {
    bottom: -50px;
    right: -100px;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle at center, ${({ theme }) => theme.colors.primary}22, transparent 70%);
  }
`;

export const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <Section background="gradient1" id="subscribe">
      <BackgroundShape className="shape1" />
      <BackgroundShape className="shape2" />
      
      <SubscriptionWrapper>
        <SubscriptionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Subscribe to Our Newsletter
        </SubscriptionTitle>
        
        <SubscriptionDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get the latest math tips, tutorials, and resources delivered straight to your inbox.
          We'll send you valuable content to help you excel in mathematics.
        </SubscriptionDescription>
        
        <SubscriptionForm 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <InputWrapper>
            <EmailIcon>
              <FaEnvelope />
            </EmailIcon>
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputWrapper>
          <SubscribeButton type="submit" disabled={isSubmitting || !email}>
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            {!isSubmitting && <FaPaperPlane />}
          </SubscribeButton>
        </SubscriptionForm>
        
        {isSuccess && (
          <SuccessMessage
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <FaCheckCircle />
            <span>Thank you for subscribing! Check your inbox soon.</span>
          </SuccessMessage>
        )}
      </SubscriptionWrapper>
    </Section>
  );
}; 