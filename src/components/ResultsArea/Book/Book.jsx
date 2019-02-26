import React from 'react';

const book = (props) => {
  const { title, authors, publisher, imageUrl, bookUrl } = props.bookData;
  return (
    <div>
      <p>{title}</p>
      <p>{authors}</p>
      <p>{publisher}</p>
      <img src={imageUrl} alt="book" />
      <p>{bookUrl}</p>
    </div>
  )
}

export default book;