import React from 'react';
import './App.css';
import ReviewCard from './ReviewCard';

const App = () => {
  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies.',
    },
    {
      id: 2,
      author: 'Jane Doe',
      content: 'auctor, nisi elit consequat elit, eget tincidunt nunc tellus nec libero. Nullam nec purus ut libero ultricies ultricies.',
    },
    {
      id: 3,
      author: 'John Smith',
      content: 'bibendum, nisi elit consequat elit, eget tincidunt nunc tellus nec libero. Nullam nec purus ut libero ultricies ultricies.',
    },
  ];

  return (
    <div className="app-container">
      <h1>レビューカード</h1>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default App;
