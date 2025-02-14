import React from 'react';
import NewsList from '../components/NewsList';
import './Home.css';

const Home = () => {
  // Dummy data for now (replace with Firebase data later)
  const news = [
    {
      title: "Breaking News!",
      content: "This is the latest news update.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      title: "Another Update",
      content: "More spicy news for you.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      title: "Big Announcement",
      content: "Stay tuned for more updates.",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="home">
      <h1>Latest News</h1>
      <NewsList news={news} />
    </div>
  );
};

export default Home;