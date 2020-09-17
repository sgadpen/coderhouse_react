import React from 'react';
import { Button } from 'react-bootstrap';

function PrButton(props) {
  return <Button onClick={props.onClick}>{props.sign}</Button> 
};

export default PrButton;