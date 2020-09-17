import React from "react";
import { Button,Card, Container,Row } from 'react-bootstrap';
import ItemCount from "./ItemCount";



export default class ProductItem extends React.Component {
  /**
   * Creates an instance of ProductItem.
   * @memberof ProductItem
   */
  constructor(props) {
    super(props);
    /**
     * The ProductItem initial state.
     * @memberof ProductItem
     */
  }

  
  /**
   * Renders the ProductItem Component.
   *
   * @return {JSX}  The ProductItem component to render. 
   * @memberof ProductItem
   */
  render() {
    return (
      <Card className="home-m-bottom_x-large home-m-right_small"   style={{ width: '15rem' }}>
				<Card.Img variant="top" src={this.props.product.src} />
				<Card.Body>
        <Card.Title>{this.props.product.name}<small class="text-muted">/ {this.props.product.brand}</small></Card.Title>
					<Card.Text>{this.props.product.desc}
    				</Card.Text>
            <div>
                <ItemCount stock={this.props.product.stock} initialCount ={this.props.product.initialCount}/>
                <Button variant="primary">Comprar</Button>
            </div>
				</Card.Body>
			</Card>
    );
  }
}

