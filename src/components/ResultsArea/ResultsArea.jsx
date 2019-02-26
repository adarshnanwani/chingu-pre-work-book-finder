import React from 'react';
import Book from './Book/Book';

const resultArea = (props) => {
  const books = props.booksData.map((book) => {
    return <Book bookData={book} key={book.key} />
  });
  return (
    <div>
      {books}
    </div>
  )
}

export default resultArea;
