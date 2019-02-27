import React from 'react';
import './Book.css';

const book = (props) => {
  const { title, authors, publisher, imageUrl, bookUrl } = props.bookData;
  return (
    <div className="book">
      <p>{title}</p>
      <p>{authors}</p>
      <p>{publisher}</p>
      <img src={imageUrl} alt="book" />
      <p>{bookUrl}</p>
    </div>
  )
}

export default book;