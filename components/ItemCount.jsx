import React from "react";
import PrButton from "./PrButton";
import PrInput from "./PrInput";
import Form from 'react-bootstrap/Form'

export default class ItemCount extends React.Component {
  /**
   * Creates an instance of ItemCount.
   * @memberof ItemCount
   */
  constructor(props) {
    super(props);
    console.log(props);
    console.log('constructor()');
    /**
     * The ItemCount initial state.
     * @memberof ItemCount
     */
    this.state = {
      count: this.props.initialCount,
      upper :this.props.stock,
      lower: this.props.initialCount
    }
    this.onAdd = this.onAdd.bind(this);
    this.onSubstract = this.onSubstract.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  /**
   * Handles the state change of the input element.
   *
   * @param {Event} event  The change event.
   * @memberof ItemCount
   */
  onChange = (event) => {
    this.setState({
      count: event.target.value
    });
  }

  /**
   * Handles the add action in the Button.
   *
   * @memberof ItemCount
   */
  onAdd = () => {
    if(this.state.count < this.state.upper) {
      this.setState((state) => ({
        count: state.count + 1
      }));
    }
  }
  
  /**
   * Handles the Substract action in the Button.
   *
   * @memberof ItemCount
   */
  onSubstract = () => {
    if(this.state.count > this.state.lower) {
      this.setState((state) => ({
        count: state.count - 1
      }));
    }
  }
 
  /**
   * Renders the ItemCount Component.
   *
   * @return {JSX}  The ItemCount component to render. 
   * @memberof ItemCount
   */
  render() {
    return (
        <Form.Group class="form-inline">
                <PrButton onClick={this.onSubstract} sign={"-"}/>
                <PrInput count={this.state.count} handleChange={this.onChange}/>
                <PrButton onClick={this.onAdd} sign={"+"}/>
        </Form.Group>
                
    );
  }
}

