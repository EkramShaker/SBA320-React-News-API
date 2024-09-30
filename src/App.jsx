import React, { useRef } from 'react';
import { NewsProvider, useNews } from './context/NewsContext';
import NewsCard from './components/NewsCard';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const scrollToTop = useRef(null);

  const scrollToStart = () => {
    scrollToTop.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NewsProvider>
      <div ref={scrollToTop}>
        <Header />
        <MainContent />
        <Footer scrollToStart={scrollToStart} />
      </div>
    </NewsProvider>
  );
}

// Main content
function MainContent() {
  const { news, loading } = useNews();

  if (loading) return <p>Loading news...</p>;

  return (
    <div className="news-container">
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default App;
