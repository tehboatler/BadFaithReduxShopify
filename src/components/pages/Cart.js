import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { withRouter } from 'react-router-dom';

const RootContainer = styled.div`
  height: 30vh;
  width: 100%;
  // background-color: red;
  padding: 0vw 10vw;
`;

const CartTitleWrapper = styled.div`
  height: auto;
  width: 10vw;
  // background-color: grey;
`;

const CartTitle = styled.h1`
  color: black;
  font-size: 2rem;
`;

const OrderSummaryTitle = styled.h1`
  color: black;
  font-size: 1.5rem;
`;

const CartSeparatorLarge = styled.div`
  height: 1vh;
  width: 80vw;
  background-color: black;
`;

const CartSeparatorSmall = styled.div`
  height: 0.2vh;
  width: 80vw;
  background-color: black;
`;

const CartItem = styled.div`
  height: 10vh;
  width: 80vw;
  background-color: lightblue;
`;

export class Cart extends Component {
  renderCart = () => {
    return (
      <RootContainer>
        <div />
      </RootContainer>
    );
  };
  renderEmpty = () => {
    const { cart } = this.props;
    return (
      <RootContainer>
        <CartTitleWrapper>
          <CartTitle>Cart</CartTitle>
        </CartTitleWrapper>
        <CartSeparatorLarge />
        <OrderSummaryTitle>Order Summary</OrderSummaryTitle>
        <CartSeparatorSmall />
        {cart.map(CartItems => {
          return <CartItem />;
        })}
        <CartSeparatorSmall />
        <div />
      </RootContainer>
    );
  };

  render() {
    const { cart } = this.props;
    if (cart[0]) {
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
