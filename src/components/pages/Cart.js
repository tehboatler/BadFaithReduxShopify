import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { withRouter } from 'react-router-dom';

const RootContainer = styled.div`
  height: 30vh;
  width: 100%;
  background-color: red;
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
    return (
      <RootContainer>
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
