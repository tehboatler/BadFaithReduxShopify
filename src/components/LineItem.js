// import React, { Component } from 'react';
// import styled from 'styled-components';

// const LineItem = styled.div`
//   height: 7.5vh;
//   width: 100%;
//   background-color: red;
//   margin-top: 0.5vh;
//   margin-bottom: 0;
// `;

// export default class LineItems extends Component {
//   state = {};
//   render() {
//     return <LineItem>

//     </LineItem>;
//   }
// }

import React, { Component } from 'react';

class LineItem extends Component {
  constructor(props) {
    super(props);
    this.state = { convertedPrice: '' };

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  componentDidMount = props => {
    const { price } = this.props.line_item.variant;
    console.log('Line Item Price: ', price);
    const convertedPrice = window.Currency.convert(price, 'AUD', 'USD');
    const roundedConvertedPrice = Math.round(convertedPrice * 100) / 100;
    this.setState({ convertedPrice: roundedConvertedPrice });
  };

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    return (
      <li className="Line-item">
        <div className="Line-item__img">
          {this.props.line_item.variant.image ? (
            <img
              src={this.props.line_item.variant.image.src}
              alt={`${this.props.line_item.title} product shot`}
            />
          ) : null}
        </div>
        <div className="Line-item__content">
          <div className="Line-item__content-row">
            <div className="Line-item__variant-title">
              {this.props.line_item.variant.title}
            </div>
            <span className="Line-item__title">
              {this.props.line_item.title}
            </span>
          </div>
          <div className="Line-item__content-row">
            <div className="Line-item__quantity-container">
              <button
                className="Line-item__quantity-update"
                onClick={() => this.decrementQuantity(this.props.line_item.id)}>
                -
              </button>
              <span className="Line-item__quantity">
                {this.props.line_item.quantity}
              </span>
              <button
                className="Line-item__quantity-update"
                onClick={() => this.incrementQuantity(this.props.line_item.id)}>
                +
              </button>
            </div>
            <span className="Line-item__price">
              ${' '}
              {(
                this.props.line_item.quantity * this.state.convertedPrice
              ).toFixed(2)}{' '}
              USD
            </span>
          </div>
        </div>
      </li>
    );
  }
}

export default LineItem;
