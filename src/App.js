import React, { Component } from 'react';
import './App.css';
import BookFinder from './containers/BookFinder/BookFinder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookFinder />
      </div>
    );
  }
}

export default App;
