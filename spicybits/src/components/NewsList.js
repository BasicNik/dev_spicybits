import React from 'react';
import NewsCard from './NewsCard';
import './NewsList.css';

const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((item, index) => (
        <NewsCard
          key={index}
          title={item.title}
          content={item.content}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default NewsList;