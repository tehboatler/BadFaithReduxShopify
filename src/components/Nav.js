import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LineItem from './LineItem';
import Cart from './pages/Cart';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';

const RootContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  height: 7.5vh;
  width: 100%;
  background-color: #111;
  margin: 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 7.5vh;
  width: 50%;
  //   background-color: red;
`;

const LogoImage = styled.h3`
  font-size: 2em;
  color: white;
  margin-left: 1rem;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 7.5vh;
  width: 50%;
  //   background-color: whitesmoke;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vh;
  height: 7.5vh;
  background-color: #222;
`;

const MenuItem = styled.h3`
  color: white;
`;

const CartImageWrapper = styled.div`
  display: flex;
  width: 7.5vh;
  height: 7.5vh;
  background-color: orange;
  justify-content: center;
  align-items: center;
`;


// ============================================================
// Cart Drawer
// ============================================================
const CartDrawerWrapper = styled.div`
  position: absolute;
  top: 7.5vh;
  width: 15vw;
  height: auto;
  // background-color: #f2f2f2;
  right: 0;
  @media (max-width: 415px) {
    width: 30vw;
  }
`;

const CheckoutButton = styled.button`
  background-color: #ddd;
  height: 5vh;
  width: 100%;
  border: none;
  border-bottom-right-radius: 0.5vh;
  border-bottom-left-radius: 0.5vh;
`
;
const OpenCartButton = styled.button`
  height: 100%;
  width: 100%;
  border: none;
`;

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { isCartOpen: false };

    this.openCheckout = this.openCheckout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checkout.lineItems.length === 0) {
      this.setState({lineitems: []})
    } else {
      let line_items = nextProps.checkout.lineItems.map(line_item => {
        return (
          <LineItem
            key={line_item.id.toString()}
            updateQuantityInCart={this.props.updateQuantityInCart}
            removeLineItemInCart={this.props.removeLineItemInCart}
            line_item={line_item}
          />
        );
      });
      console.log('line_items: ', line_items);
      this.setState({
        lineitems: line_items,
        isCartOpen: true
      });
    }
  }

  handleCartClose = () => {
    this.setState({ isCartOpen: false });
  };

  handleCartOpen = () => {
    this.setState({ isCartOpen: true });
  };

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    const { lineitems, isCartOpen } = this.state;

    return (
      <RootContainer>
        <LogoWrapper>
          <LogoImage>C&BF</LogoImage>
        </LogoWrapper>
        <MenuWrapper>
          <MenuItemWrapper>
            <MenuItem>Home</MenuItem>
          </MenuItemWrapper>
          {/*<MenuItemWrapper>
            <MenuItem>Ranges</MenuItem>
          </MenuItemWrapper>*/}
          <CartImageWrapper>
            <OpenCartButton onClick={this.handleCartOpen}>
              <FontAwesomeIcon size="2x" color="#111" icon={faShoppingCart} />
              </OpenCartButton>
          </CartImageWrapper>
        </MenuWrapper>
        {/*CartDrawerWrapper>
          {lineitems}
          <CheckoutButton onClick={this.openCheckout}>
            0 items in your cart
          </CheckoutButton>
        </CartDrawerWrapper>*/}
        <Cart
          checkout={this.props.checkout}
          handleCartClose={this.handleCartClose}
          isCartOpen={isCartOpen}
          line_items={lineitems}
        />
      </RootContainer>
    );
  }
}
