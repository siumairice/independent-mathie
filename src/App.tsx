import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BlogPosts } from './components/BlogPosts';
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

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
          <Hero />
          <About />
          <BlogPosts />
          <Testimonials />
          <Contact />
          <EmailSubscription />
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};
