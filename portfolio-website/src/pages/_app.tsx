import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/components/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="min-h-screen pt-16">
        <Component {...pageProps} />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}
