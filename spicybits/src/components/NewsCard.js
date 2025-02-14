import React from 'react';
import './NewsCard.css';

const NewsCard = ({ title, content, imageUrl }) => {
  return (
    <div className="news-card">
      <img src={imageUrl} alt={title} className="news-image" />
      <h2 className="news-title">{title}</h2>
      <p className="news-content">{content}</p>
    </div>
  );
};

export default NewsCard;