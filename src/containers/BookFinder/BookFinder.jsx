import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import SearchArea from '../../components/SearchArea/SearchArea';
import ResultsArea from '../../components/ResultsArea/ResultsArea';
import axios from '../../axios-bookfinder';
class BookFinder extends Component {

  state = {
    isLoading: false,
    bookResults: [],
    error:false,
    searchQuery:''
  }

  searchBook = () => {
    axios.get(`volumes?q=${this.state.searchQuery}`).then(response=>{
      console.log(response);
    });
  }

  setSearchQuery = (e) =>{
    const value = e.currentTarget.value;
    this.setState({
      searchQuery:value
    });
  }

  render() {
    return (
      <Aux>
        <SearchArea
          onClick={() => this.searchBook()}
          value={this.state.searchQuery}
          onChange={(e)=> this.setSearchQuery(e)}
        />
        <ResultsArea />
      </Aux>
    );
  }
}

export default BookFinder;