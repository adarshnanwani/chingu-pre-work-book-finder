import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import './SearchArea.css';

const searchArea = (props) => {
  return (
    <Aux>
      <p className="pageTitle">BOOK FINDER</p>
      <Input
        type="text"
        value={props.value}
        onChange={props.onChange}
        className="searchQuery"
        placeholder="Please type here"
      />
      <Button onClick={props.onCrossClick} className="crossButton">X</Button>
      <Button onClick={props.onClick} className="searchButton">Search</Button>
    </Aux>
  )
}

export default searchArea;
