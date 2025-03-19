import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BlogPosts } from './components/BlogPosts';
import { BlogPage } from './components/BlogPage';
import { ArticlePage } from './components/ArticlePage';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { EmailSubscription } from './components/EmailSubscription';
import { Footer } from './components/Footer';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// Home page component that includes all sections
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <BlogPosts />
      <Testimonials />
      <Contact />
      <EmailSubscription />
    </>
  );
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<ArticlePage />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};
