import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';

const RootContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  height: 7.5vh;
  width: 98%;
  margin-left: 2%;
  background-color: #222;
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
`;

const LineItem = styled.div`
  height: 7.5vh;
  width: 100%;
  background-color: red;
  margin-top: 0.5vh;
  margin-bottom: 0;
  border-radius: 0.5vh;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

const CheckoutButton = styled.button`
  background-color: #ddd;
  height: 5vh;
  width: 100%;
  border: none;
  border-bottom-right-radius: 0.5vh;
  border-bottom-left-radius: 0.5vh;
`;

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }
  state = {};

  componentWillReceiveProps(nextProps) {
    let line_items = nextProps.checkout.lineItems.map(line_item => {
      return <LineItem key={line_item.id} />;
    });
    console.log(line_items);
    this.setState({
      lineitems: line_items
    });
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    const { lineitems } = this.state;
    return (
      <RootContainer>
        <LogoWrapper>
          <LogoImage>C&BF</LogoImage>
        </LogoWrapper>
        <MenuWrapper>
          <MenuItemWrapper>
            <MenuItem>Home</MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <MenuItem>Ranges</MenuItem>
          </MenuItemWrapper>
          <CartImageWrapper>
            <Link to="/cart">
              <FontAwesomeIcon size="2x" color="#111" icon={faShoppingCart} />
            </Link>
          </CartImageWrapper>
        </MenuWrapper>
        <CartDrawerWrapper>
          {lineitems}
          <CheckoutButton onClick={this.openCheckout}>
            0 items in your cart
          </CheckoutButton>
        </CartDrawerWrapper>
      </RootContainer>
    );
  }
}
