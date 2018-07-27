import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LineItem from '../LineItem';
import Cart from '../Cart';

import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const RootContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  top: 3vw;
  width: 75%;
  margin: 0 12.5%;
  background-color: white;
  height: 5vw;
`;

const SiteTopDetail = styled.div`
  position: absolute;
  z-index: 4;
  background-color: white;
  width: 100%;
  height: 3vw;
`;

// ============================================================
// Shipping Section Styles
// ============================================================
const FreeShipping = styled.div`
  margin: 0;
  text-align: center;
  top: 0;
  height: auto;
  background-color: white;
  width: 100%;
  height: auto;
`;

const FreeShippingText = styled.h1`
  font-size: 0.78vw;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  color: black;
  font-weight: 700;
`;

// ============================================================
// Site Tagline
// ============================================================
const TaglineWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #131313;
`;

const TaglineText = styled.h1`
width: 20%;
margin: 0 67% 0 13%;
padding: 0.4vw 0;
font-family: 'Archivo Black', Arial, Helvetica, sans-serif;
font-size: 0.6vw;
color: white;
    
`

// ============================================================
// Logo Styles
// ============================================================

const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  height: 5vw;
  width: 50%;
`;

const LogoImage = styled.h3`
align-self: center;
  font-family: 'Permanent Marker', cursive;
  font-size: 2vw;
  color: #131313;
  margin-left: 1rem;
`;

// ============================================================
// Menu Styles
// ============================================================

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 5vw;
  width: 50%;
  //   background-color: whitesmoke;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vh;
  height: 3.5vh;
  background-color: transparent;
`;

const MenuItem = styled.h3`
  color: #131313;
`;

const CartImageWrapper = styled.div`
  display: flex;
  width: 3.5vw;
  height: 3.5vw;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

// ============================================================
// Cart Drawer Button Styles
// ============================================================
const OpenCartButton = styled.button`
  height: 100%;
  width: 100%;
  border: none;
  background-color: white;
`;


// Nav Class
// ============================================================
export default class DesktopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
      drawerOpen: false
    };

    this.openCheckout = this.openCheckout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checkout.lineItems.length === 0) {
      this.setState({ lineitems: [] });
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

  openDrawer = () => {
    const { drawerOpen } = this.state;
    console.log('Button clicked!');
    this.setState({ drawerOpen: !drawerOpen });
  };

  render() {
    const { lineitems, isCartOpen, drawerOpen } = this.state;
    return (
      <div>
        <SiteTopDetail>
          <FreeShipping>
            <FreeShippingText>
              Free Shipping on all orders worldwide!
            </FreeShippingText>
          </FreeShipping>
          <TaglineWrapper>
            <TaglineText>Style for the Starbound  | What's your Star Sign?</TaglineText>
          </TaglineWrapper>
        </SiteTopDetail>

        <RootContainer>
          <LogoWrapper>
            <LogoImage>StarSigned</LogoImage>
          </LogoWrapper>
          <MenuWrapper>
            <Link to="/featured">
              <MenuItemWrapper>
                <MenuItem>Home</MenuItem>
              </MenuItemWrapper>
            </Link>
            <CartImageWrapper>
              <OpenCartButton onClick={this.handleCartOpen}>
                <FontAwesomeIcon size="2x" color="#131313" icon={faShoppingCart} />
              </OpenCartButton>
            </CartImageWrapper>
          </MenuWrapper>
          <Cart
            checkout={this.props.checkout}
            handleCartClose={this.handleCartClose}
            isCartOpen={isCartOpen}
            line_items={lineitems}
          />
        </RootContainer>
      </div>
    );
  }
}
