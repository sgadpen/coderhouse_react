import React from 'react';
import { Carousel, CardGroup, Container, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Carousel>
          {this.props.items.map((item) => {
            return <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.src}
                alt={item.name}
              />
              <Carousel.Caption>
                <h2>{item.name}</h2>
                <p>{item.active}</p>
              </Carousel.Caption>
            </Carousel.Item>
          })
          }
        </Carousel>
          <CardGroup>
            {this.props.products.map((product) => { return <ProductItem product = {product} /> })}
          </CardGroup>
        
      </div>

    );
  }
}
