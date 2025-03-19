import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { FaCalendarAlt, FaUser, FaTag, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  h2 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }
  
  p {
    max-width: 600px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const FeaturedPost = styled(motion.article)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.div`
  height: 100%;
  min-height: 300px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 250px;
  }
`;

const FeaturedContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h3 {
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    
    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      transition: color ${({ theme }) => theme.transitions.fast};
      
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.6;
  }
`;

const FeaturedMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.small.fontSize};
  color: ${({ theme }) => theme.colors.grayLight};
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform ${({ theme }) => theme.transitions.medium},
              box-shadow ${({ theme }) => theme.transitions.medium};
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.2) 100%);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.medium};
  }
  
  ${BlogCard}:hover & img {
    transform: scale(1.05);
  }
`;

const BlogContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BlogTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const BlogExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  flex: 1;
`;

const BlogMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.small.fontSize};
  color: ${({ theme }) => theme.colors.grayLight};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};
  
  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ReadMoreButton = styled(Link)`
  display: inline-block;
  margin-top: auto;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accentDark};
  }
  
  &::after {
    content: ' →';
    transition: transform ${({ theme }) => theme.transitions.fast};
    display: inline-block;
  }
  
  &:hover::after {
    transform: translateX(4px);
  }
`;

// Sample blog posts data
const featuredPost = {
  id: 1,
  slug: 'mastering-calculus-guide',
  title: 'Mastering Calculus: A Step-by-Step Guide',
  excerpt: 'Calculus can be intimidating, but with the right approach, anyone can master it. This comprehensive guide breaks down key concepts into manageable steps, providing clear explanations and practical examples to help you build confidence and proficiency.',
  image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
  date: 'May 15, 2023',
  author: 'Dr. Sarah Johnson',
  category: 'Calculus',
  readTime: '8 min read'
};

const blogPosts = [
  {
    id: 2,
    slug: 'algebra-fundamentals',
    title: 'Algebra Fundamentals: Building a Strong Foundation',
    excerpt: 'Algebra is the gateway to higher mathematics. This article explores the fundamental concepts of algebra that every student should master to succeed in higher-level math courses.',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2071&auto=format&fit=crop',
    date: 'June 10, 2023',
    author: 'Michael Chen',
    category: 'Algebra',
    readTime: '6 min read'
  },
  {
    id: 3,
    slug: 'sat-math-preparation',
    title: 'SAT Math Preparation: Strategies for Success',
    excerpt: 'Preparing for the SAT math section requires a strategic approach. Learn effective techniques and practice methods to maximize your score on test day.',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop',
    date: 'July 5, 2023',
    author: 'Jessica Martinez',
    category: 'Test Preparation',
    readTime: '7 min read'
  },
  {
    id: 4,
    slug: 'geometry-principles',
    title: 'Geometry Principles: Understanding Shapes and Space',
    excerpt: 'Geometry is all about understanding the properties and relationships of shapes and spaces. This article introduces key geometric concepts and their applications.',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=2070&auto=format&fit=crop',
    date: 'August 20, 2023',
    author: 'Dr. Robert Kim',
    category: 'Geometry',
    readTime: '5 min read'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const featuredVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
};

// Update the component interface
interface BlogPostsProps {
  showHeader?: boolean;
}

// Update the component definition
export const BlogPosts = ({ showHeader = true }: BlogPostsProps) => {
  // Add a handler for clicking on article links
  const handleArticleClick = () => {
    // Scroll to top to ensure the new article starts at the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <Section id="blog" background="white">
      {showHeader && (
        <BlogHeader>
          <h2>Latest Articles</h2>
          <p>Explore our collection of educational resources, tips, and insights to enhance your mathematical journey</p>
        </BlogHeader>
      )}
      
      <FeaturedPost
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={featuredVariants}
      >
        <FeaturedImage>
          <img src={featuredPost.image} alt={featuredPost.title} />
        </FeaturedImage>
        <FeaturedContent>
          <FeaturedMeta>
            <MetaItem>
              <FaCalendarAlt />
              <span>{featuredPost.date}</span>
            </MetaItem>
            <MetaItem>
              <FaUser />
              <span>{featuredPost.author}</span>
            </MetaItem>
            <MetaItem>
              <FaTag />
              <span>{featuredPost.category}</span>
            </MetaItem>
            <MetaItem>
              <FaClock />
              <span>{featuredPost.readTime}</span>
            </MetaItem>
          </FeaturedMeta>
          <h3>
            <a href={`#blog-${featuredPost.id}`}>{featuredPost.title}</a>
          </h3>
          <p>{featuredPost.excerpt}</p>
          <ReadMoreButton to={`/blog/${featuredPost.slug}`} onClick={handleArticleClick}>
            Read full article
          </ReadMoreButton>
        </FeaturedContent>
      </FeaturedPost>
      
      <BlogGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {blogPosts.map((post) => (
          <BlogCard key={post.id} variants={cardVariants}>
            <BlogImage>
              <img src={post.image} alt={post.title} />
            </BlogImage>
            <BlogContent>
              <BlogMeta>
                <MetaItem>
                  <FaCalendarAlt />
                  <span>{post.date}</span>
                </MetaItem>
                <MetaItem>
                  <FaClock />
                  <span>{post.readTime}</span>
                </MetaItem>
              </BlogMeta>
              <BlogTitle>
                <a href={`#blog-${post.id}`}>{post.title}</a>
              </BlogTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <ReadMoreButton to={`/blog/${post.slug}`} onClick={handleArticleClick}>
                Read full article
              </ReadMoreButton>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </Section>
  );
}; 