import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPixel from 'react-facebook-pixel';

const RootContainer = styled.div`
  z-index: 998;
`;
class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = { convertedPrice: '' };

    this.openCheckout = this.openCheckout.bind(this);
  }

  componentWillReceiveProps = nextProps => {
    const { subtotalPrice } = nextProps.checkout;
    console.log('Total: ', nextProps.checkout.subtotalPrice);
    const convertedPrice = window.Currency.convert(subtotalPrice, 'AUD', 'USD');
    const roundedConvertedPrice = Math.round(convertedPrice * 100) / 100;
    this.setState({ convertedPrice: roundedConvertedPrice });
  };

  openCheckout() {
    console.log(this.props.line_items);
    window.open(this.props.checkout.webUrl);
  }

  render() {
    return (
      <RootContainer>
        <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>
          <header className="Cart__header">
            <h2>Your cart</h2>
            <button
              onClick={this.props.handleCartClose}
              className="Cart__close">
              ×
            </button>
          </header>
          <ul className="Cart__line-items">{this.props.line_items}</ul>
          <footer className="Cart__footer">
            <div className="Cart-info clearfix">
              <div className="Cart-info__total Cart-info__small">
                Subtotal (in USD)
              </div>
              <div className="Cart-info__pricing">
                <span className="pricing">$ {this.state.convertedPrice}</span>
              </div>
            </div>
            <div className="Cart-info clearfix">
              <div className="Cart-info__total Cart-info__small">Taxes</div>
              <div className="Cart-info__pricing">
                <span className="pricing">
                  $ {this.props.checkout.totalTax}
                </span>
              </div>
            </div>
            <div className="Cart-info clearfix">
              <div className="Cart-info__total Cart-info__small">
                Total (in USD)
              </div>
              <div className="Cart-info__pricing">
                <span className="pricing">$ {this.state.convertedPrice}</span>
              </div>
            </div>
            <button
              className="Cart__checkout button"
              onClick={this.openCheckout}>
              Checkout
            </button>
            <p>
              Your cart is displayed in USD. You will checkout with AUD at the
              current exchange rate. No extra charges or fees.
            </p>
          </footer>
        </div>
      </RootContainer>
    );
  }
}

export default Cart;
