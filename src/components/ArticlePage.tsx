import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Section } from './Section';
import { FaCalendarAlt, FaUser, FaTag, FaClock, FaChevronLeft, FaShareAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useParams, Link, useLocation } from 'react-router-dom';

const ArticlePageWrapper = styled.div`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.xl};
`;

const ArticleContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transition: color 0.2s ease;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    font-size: 0.8rem;
  }
`;

const ArticleHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ArticleTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.2;
`;

const ArticleMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ArticleImage = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 250px;
  }
`;

const ArticleContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.dark};

  p, ul, ol, blockquote {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  h2 {
    font-size: 1.8rem;
    margin: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: 1.4rem;
    margin: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
  }

  ul, ol {
    padding-left: ${({ theme }) => theme.spacing.lg};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  blockquote {
    padding: ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.light};
    border-left: 4px solid ${({ theme }) => theme.colors.accent};
    font-style: italic;
  }

  img {
    max-width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      text-decoration: underline;
    }
  }

  .math-equation {
    padding: ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    margin: ${({ theme }) => theme.spacing.lg} 0;
    text-align: center;
    font-family: 'Times New Roman', serif;
    font-size: 1.2rem;
  }
`;

const ShareSection = styled.div`
  margin: ${({ theme }) => theme.spacing.xl} 0;
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const ShareTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ShareButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
    transform: translateY(-2px);
  }
`;

const RelatedArticles = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-top: ${({ theme }) => theme.spacing.xl};
`;

const RelatedTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const RelatedArticleCard = styled(Link)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const RelatedImage = styled.div`
  height: 150px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RelatedContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

const RelatedArticleTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};
`;

const RelatedArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray};
`;

// Mock articles data
const articles = [
  {
    id: 1,
    slug: 'mastering-calculus-guide',
    title: 'Mastering Calculus: A Step-by-Step Guide',
    excerpt: 'Calculus can be intimidating, but with the right approach, anyone can master it. This comprehensive guide breaks down key concepts into manageable steps, providing clear explanations and practical examples to help you build confidence and proficiency.',
    content: `
      <p>Calculus is often considered one of the most challenging branches of mathematics, but with a systematic approach and consistent practice, it becomes much more approachable. This guide aims to demystify calculus concepts and provide you with practical strategies to master them.</p>
      
      <h2>Understanding the Fundamentals of Calculus</h2>
      
      <p>At its core, calculus is about change and accumulation. It's divided into two main branches:</p>
      
      <ul>
        <li><strong>Differential calculus</strong> - deals with rates of change and slopes of curves</li>
        <li><strong>Integral calculus</strong> - focuses on accumulation of quantities and areas under curves</li>
      </ul>
      
      <p>Before diving deep into calculus, ensure you have a solid understanding of these prerequisites:</p>
      
      <ul>
        <li>Algebra: Manipulating equations, factoring, and solving for variables</li>
        <li>Functions: Domain, range, composition, and inverse functions</li>
        <li>Trigonometry: Understanding sine, cosine, tangent, and their properties</li>
        <li>Limits: The foundational concept that bridges algebra and calculus</li>
      </ul>
      
      <h2>Mastering Derivatives</h2>
      
      <p>Derivatives represent the rate at which a function is changing at a specific point. They can be interpreted as the slope of the tangent line to the function's graph at that point.</p>
      
      <p>The derivative of a function f(x) is denoted as f'(x) or df/dx, and it can be found using various methods:</p>
      
      <h3>Basic Derivative Rules:</h3>
      
      <ul>
        <li>Constant Rule: If f(x) = c, then f'(x) = 0</li>
        <li>Power Rule: If f(x) = x^n, then f'(x) = n*x^(n-1)</li>
        <li>Sum Rule: If h(x) = f(x) + g(x), then h'(x) = f'(x) + g'(x)</li>
        <li>Product Rule: If h(x) = f(x) * g(x), then h'(x) = f'(x) * g(x) + f(x) * g'(x)</li>
        <li>Quotient Rule: If h(x) = f(x) / g(x), then h'(x) = [f'(x) * g(x) - f(x) * g'(x)] / [g(x)]^2</li>
        <li>Chain Rule: If h(x) = f(g(x)), then h'(x) = f'(g(x)) * g'(x)</li>
      </ul>
      
      <p>Let's see an example of finding the derivative of a polynomial function:</p>
      
      <p>For f(x) = 3x^4 - 2x^2 + 5x - 7</p>
      
      <p>Using the power rule and the sum rule:</p>
      
      <p>f'(x) = 3 * 4 * x^(4-1) - 2 * 2 * x^(2-1) + 5 * 1 * x^(1-1) - 0</p>
      <p>f'(x) = 12x^3 - 4x + 5</p>
      
      <h2>Understanding Integrals</h2>
      
      <p>Integration is the reverse process of differentiation. It allows us to find the accumulation of quantities and calculate areas under curves.</p>
      
      <p>The indefinite integral of a function f(x) is denoted as ∫f(x)dx and gives us the antiderivative of f(x), which is a family of functions differing by a constant.</p>
      
      <h3>Basic Integration Rules:</h3>
      
      <ul>
        <li>Power Rule: ∫x^n dx = x^(n+1)/(n+1) + C (for n ≠ -1)</li>
        <li>Logarithmic Rule: ∫(1/x) dx = ln|x| + C</li>
        <li>Exponential Rule: ∫e^x dx = e^x + C</li>
        <li>Trigonometric Rules: 
          <ul>
            <li>∫sin(x) dx = -cos(x) + C</li>
            <li>∫cos(x) dx = sin(x) + C</li>
          </ul>
        </li>
      </ul>
      
      <p>A definite integral, denoted as ∫[a to b]f(x)dx, calculates the signed area between the function and the x-axis from x = a to x = b.</p>
      
      <div class="math-equation">
        ∫[a to b]f(x)dx = F(b) - F(a)
      </div>
      
      <p>Where F(x) is the antiderivative of f(x).</p>
      
      <h2>Applications of Calculus</h2>
      
      <p>Calculus has numerous real-world applications, including:</p>
      
      <ul>
        <li><strong>Physics:</strong> Motion, electricity, heat, light, harmonics, acoustics, and more</li>
        <li><strong>Engineering:</strong> Signal processing, control systems, design optimization</li>
        <li><strong>Economics:</strong> Marginal cost, revenue, and profit analysis</li>
        <li><strong>Medicine:</strong> Heart rate, blood flow, and drug dose-response curves</li>
        <li><strong>Computer Science:</strong> Machine learning, optimization algorithms</li>
      </ul>
      
      <h2>Study Strategies for Calculus Success</h2>
      
      <ol>
        <li><strong>Practice regularly:</strong> Calculus requires consistent practice to reinforce concepts and techniques</li>
        <li><strong>Understand rather than memorize:</strong> Focus on grasping the underlying principles instead of memorizing formulas</li>
        <li><strong>Build visual intuition:</strong> Use graphs and diagrams to visualize concepts</li>
        <li><strong>Connect with real-world applications:</strong> Understanding how calculus applies to real problems enhances comprehension</li>
        <li><strong>Teach concepts to others:</strong> Explaining topics to classmates or study partners deepens your understanding</li>
        <li><strong>Use multiple resources:</strong> Textbooks, online videos, practice problems, and tutoring can provide different perspectives</li>
        <li><strong>Focus on fundamentals first:</strong> Ensure you have a solid grasp of prerequisites before tackling advanced topics</li>
      </ol>
      
      <p>Remember, mastering calculus is a journey that requires patience and persistence. Don't be discouraged by initial challenges – with the right approach and consistent effort, you can succeed in understanding this fascinating field of mathematics.</p>
    `,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
    date: 'May 15, 2023',
    author: 'Dr. Sarah Johnson',
    category: 'Calculus',
    readTime: '8 min read'
  },
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
  }
];

export const ArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Scroll to top when the slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, location.pathname]);

  useEffect(() => {
    // In a real app, you would fetch the article by slug from an API
    // Here we're using the mock data
    const foundArticle = articles.find(a => a.slug === slug);
    if (foundArticle) {
      setArticle(foundArticle);
      // Get related articles (excluding the current one)
      setRelatedArticles(articles.filter(a => a.id !== foundArticle.id).slice(0, 2));
    }
    setLoading(false);
  }, [slug]);

  // Scroll handler for related article links
  const handleRelatedArticleClick = () => {
    window.scrollTo(0, 0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Section background="white" id="article">
      <ArticlePageWrapper>
        <ArticleContainer>
          <BackLink to="/blog">
            <FaChevronLeft />
            Back to Blog
          </BackLink>
          
          <ArticleHeader>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleMeta>
              <MetaItem>
                <FaCalendarAlt />
                {article.date}
              </MetaItem>
              <MetaItem>
                <FaUser />
                {article.author}
              </MetaItem>
              <MetaItem>
                <FaTag />
                {article.category}
              </MetaItem>
              <MetaItem>
                <FaClock />
                {article.readTime}
              </MetaItem>
            </ArticleMeta>
          </ArticleHeader>
          
          <ArticleImage>
            <img src={article.image} alt={article.title} />
          </ArticleImage>
          
          <ArticleContent dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <ShareSection>
            <ShareTitle>
              <FaShareAlt />
              Share this article
            </ShareTitle>
            <ShareButtons>
              <ShareButton href="#" target="_blank" aria-label="Share on Facebook">
                <FaFacebook />
              </ShareButton>
              <ShareButton href="#" target="_blank" aria-label="Share on Twitter">
                <FaTwitter />
              </ShareButton>
              <ShareButton href="#" target="_blank" aria-label="Share on LinkedIn">
                <FaLinkedin />
              </ShareButton>
            </ShareButtons>
          </ShareSection>
          
          <RelatedArticles>
            <RelatedTitle>Related Articles</RelatedTitle>
            <RelatedGrid>
              {relatedArticles.map(relatedArticle => (
                <RelatedArticleCard 
                  key={relatedArticle.id} 
                  to={`/blog/${relatedArticle.slug}`}
                  onClick={handleRelatedArticleClick}
                >
                  <RelatedImage>
                    <img src={relatedArticle.image} alt={relatedArticle.title} />
                  </RelatedImage>
                  <RelatedContent>
                    <RelatedArticleTitle>{relatedArticle.title}</RelatedArticleTitle>
                    <RelatedArticleMeta>
                      <FaCalendarAlt size={12} />
                      {relatedArticle.date}
                    </RelatedArticleMeta>
                  </RelatedContent>
                </RelatedArticleCard>
              ))}
            </RelatedGrid>
          </RelatedArticles>
        </ArticleContainer>
      </ArticlePageWrapper>
    </Section>
  );
}; 