import styled from 'styled-components';
import { Section } from './Section';
import { BlogPosts } from './BlogPosts';
import { motion } from 'framer-motion';

const BlogPageWrapper = styled.div`
  width: 100%;
  padding-top: 80px; // Account for header height
`;

const BlogPageHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.accent};
      border-radius: ${({ theme }) => theme.borderRadius.small};
    }
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const BlogPage = () => {
  return (
    <Section background="white" id="blog-page">
      <BlogPageWrapper>
        <BlogPageHeader>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mathematics Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our latest articles, tutorials, and resources to enhance your mathematical journey
          </motion.p>
        </BlogPageHeader>
        
        <BlogPosts showHeader={false} />
      </BlogPageWrapper>
    </Section>
  );
}; 