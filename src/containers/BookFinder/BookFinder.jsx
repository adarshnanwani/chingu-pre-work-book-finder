import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import SearchArea from '../../components/SearchArea/SearchArea';
import ResultsArea from '../../components/ResultsArea/ResultsArea';
class BookFinder extends Component {
  render() {
    return (
      <Aux>
        <SearchArea />
        <ResultsArea />
      </Aux>
    );
  }
}

export default BookFinder;