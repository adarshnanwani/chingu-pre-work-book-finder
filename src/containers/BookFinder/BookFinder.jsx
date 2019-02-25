import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import SearchArea from '../../components/SearchArea/SearchArea';
import ResultsArea from '../../components/ResultsArea/ResultsArea';
import axios from '../../axios-bookfinder';
class BookFinder extends Component {

  state = {
    isLoading: false,
    bookResults: [],
    error: false,
    searchQuery: ''
  };

  searchBook = () => {
    axios.get(`volumes?q=${this.state.searchQuery}`).then(response => {
      const bookData = response.data.items
        .map(book => {
          const bookInfo = { ...book.volumeInfo };
          const url = bookInfo.infoLink;
          const authors = bookInfo.authors.reduce((authors, author, index) => {
            return index === 0
              ? authors + author
              : authors + ', ' + author;
          }, '')
          const imgLink = bookInfo.imageLinks.thumbnail;
          const publisher = bookInfo.publisher;
          const title = bookInfo.title;
          return {
            bookUrl: url,
            authors: authors,
            imageUrl: imgLink,
            publisher: publisher,
            title: title
          };
        });
      this.setState({
        bookResults: bookData
      });
    });
  }

  setSearchQuery = (e) => {
    const value = e.currentTarget.value;
    this.setState({
      searchQuery: value
    });
  };

  render() {
    return (
      <Aux>
        <SearchArea
          onClick={() => this.searchBook()}
          value={this.state.searchQuery}
          onChange={(e) => this.setSearchQuery(e)}
        />
        <ResultsArea />
      </Aux>
    );
  }
}

export default BookFinder;