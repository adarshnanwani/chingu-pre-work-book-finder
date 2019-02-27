import React from 'react';
import BookRow from './BookRow/BookRow';
import './ResultsArea.css';

const resultArea = (props) => {
  const books = props.booksData.reduce((result, book, index) => {
    if (index % 2 === 0) {
      let arr = [];
      arr.push(book);
      result.push(arr);
    }
    else {
      result[result.length - 1].push(book);
    }
    return result;
  }, [])
    .map(bookRow => {
      return <BookRow bookRow={bookRow} key={bookRow[0].bookUrl} seeBookDetails={props.seeBookDetails} />
    });



  return (
    <div className="resultsContainer">
      {books}
    </div>
  )
}

export default resultArea;
