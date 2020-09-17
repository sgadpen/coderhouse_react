import React from 'react';
import { Form } from 'react-bootstrap';

/**
 * The Input Component.
 * 
 * @param  {Number}    count         The count value to show on the input.
 * @param  {Function}  handleChange  The function to handle the onChange action.
 *
 * @return {JSX}  The JSX element to render.         
 */
function PrInput(props) {
  console.log(props);
  return (
      <Form.Group>
        <Form.Control type="numeric" onChange={props.handleChange} value ={props.count} />
      </Form.Group>
  )
}

export default PrInput;