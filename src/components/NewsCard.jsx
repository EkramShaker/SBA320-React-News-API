import React from 'react';

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <img
        src={article.image ? article.image : 'https://via.placeholder.com/400x200'}
        alt={article.title || 'No title available'}
      />
      <h2>{article.title || 'No Title Available'}</h2>
      <p>{article.description || 'No Description Available'}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default NewsCard;
