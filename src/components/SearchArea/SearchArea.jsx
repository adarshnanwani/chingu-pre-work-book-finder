import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';

const searchArea = (props) => {
  return(
    <Aux>
      <h1>Book Finder</h1>
      <Input type="text" value={props.value} onChange={props.onChange}/>
      <Button onClick={props.onCrossClick}>X</Button>
      <Button onClick={props.onClick}>Search</Button>
    </Aux>
  )
}

export default searchArea;
