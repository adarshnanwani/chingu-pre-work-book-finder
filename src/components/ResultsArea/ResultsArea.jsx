import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BookRow from './BookRow/BookRow';
import './ResultsArea.css';

const resultArea = (props) => {
  let books = (<div className="beforeSearchMessage">
    <p><FontAwesomeIcon icon={{ iconName: 'frown', prefix: 'far' }} /> <span className="message">Nothing Here Yet - Try Searching For A Book!</span></p>
  </div>);
  if (props.isLoading) {
    books = (<div className="beforeSearchMessage">
      <p><FontAwesomeIcon icon="spinner" spin size="3x" /></p>
    </div>);
  }
  if (!props.isLoading && props.booksData.length > 0) {
    books = props.booksData.reduce((result, book, index) => {
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
  }

  return (
    <div className="resultsContainer">
      {books}
    </div>
  )
}

export default resultArea;
