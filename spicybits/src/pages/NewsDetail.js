import React from 'react';
import './NewsDetail.css';

const NewsDetail = ({ title, content, imageUrl }) => {
  return (
    <div className="news-detail">
      <img src={imageUrl} alt={title} className="detail-image" />
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default NewsDetail;