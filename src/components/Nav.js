import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LineItem from './LineItem';
import Cart from './Cart';

import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import StarSignedLogo from '../img/Logo.png';

const RootContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 11.5vw;
  width: 100%;
  background-color: white;
  height: 15vw;
  border-bottom: 1px #eee solid;
  margin-bottom: 1vw;
`;

const SiteTopDetail = styled.div`
  position: absolute;
  z-index: 1;
  background-color: white;
  width: 100%;
  height: 11.5vw;
  overflow: hidden;
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
  font-size: 3vw;
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
  width: 100%;
  margin: 0 77% 0 3%;
  padding: 1vw 0;
  font-family: 'Archivo Black', Arial, Helvetica, sans-serif;
  font-size: 2vw;
  color: white;
`;

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

const LogoImageWrapper = styled.div`
  background-image: url(${StarSignedLogo});
  background-size: cover;
  height: 10vw;
  width: 31.84vw;
`

const LogoImage = styled.h3`
  align-self: center;
  font-family: 'Permanent Marker', cursive;
  font-size: 5vw;
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
  height: 10vw;
  width: 50%;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vh;
  height: 3.5vh;
  background-color: transparent;
`;

const MenuItem = styled.h3`
  color: #131313;
`;

const CartImageWrapper = styled.div`
  display: flex;
  width: 10vw;
  height: 10vw;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding-right: 2.5vw;
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
            <TaglineText>
              ♈︎ ♉︎ ♊︎ ♋︎ ♌︎ ♍︎ ♎︎ ♏︎ ♐︎ ♑︎ ♒︎ ♓︎ | What's your Star Sign?
            </TaglineText>
          </TaglineWrapper>
        </SiteTopDetail>

        <RootContainer>
          <LogoWrapper>
            <LogoImageWrapper/>
          </LogoWrapper>
          <MenuWrapper>
            <Link to="/">
              <MenuItemWrapper>
                <MenuItem>Home</MenuItem>
              </MenuItemWrapper>
            </Link>
            <CartImageWrapper>
              <OpenCartButton onClick={this.handleCartOpen}>
                <FontAwesomeIcon
                  size="2x"
                  color="#131313"
                  icon={faShoppingCart}
                />
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
