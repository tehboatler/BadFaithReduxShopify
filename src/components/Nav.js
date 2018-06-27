// import React, { Component } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';

// import LineItem from './LineItem';
// import Cart from './Cart';

// import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// const RootContainer = styled.div`
//   position: fixed;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   z-index: 4;
//   height: 3.5vw;
//   width: 100%;
//   background-color: #111;
//   @media (max-width: 415px) {
//     height: 12.5vw;
//   }
// `;

// // ============================================================
// // Shipping Section Styles
// // ============================================================
// const FreeShipping = styled.div`
//   position: fixed;
//   z-index: 3;
//   margin: 0;
//   text-align: center;
//   top: 3.5vw;
//   height: auto;
//   background-color: white;
//   width: 100%;
//   @media (max-width: 415px) {
//     top: 12.5vw;
//     height: 7.5vw;
//     // background-color: black;
//   }
// `;

// const FreeShippingText = styled.h1`
//   font-size: 1.1em;
//   color: black;
//   @media (max-width: 415px) {
// // color: white;
//   }
// `;

// // ============================================================
// // Logo Styles
// // ============================================================

// const LogoWrapper = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   height: 3.5vh;
//   width: 50%;
//   //   background-color: red;
// `;

// const LogoImage = styled.h3`
//   font-family: 'Permanent Marker', cursive;
//   font-size: 2em;
//   color: #eee;
//   margin-left: 1rem;
// `;

// // ============================================================
// // Menu Styles
// // ============================================================

// const MenuWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   height: 3.5vh;
//   width: 50%;
//   //   background-color: whitesmoke;
// `;

// const MenuItemWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 15vh;
//   height: 3.5vh;
//   background-color: transparent;
// `;

// const MenuItem = styled.h3`
//   color: #eee;
// `;

// const CartImageWrapper = styled.div`
//   display: flex;
//   width: 3.5vw;
//   height: 3.5vw;
//   background-color: #eee;
//   justify-content: center;
//   align-items: center;
//   @media (max-width: 415px) {
//     width: 12.5vw;
//     height: 12.5vw;
//   }
// `;

// // ============================================================
// // Cart Drawer Button Styles
// // ============================================================
// const CartDrawerWrapper = styled.div`
//   position: absolute;
//   top: 3.5vh;
//   width: 15vw;
//   height: auto;
//   // background-color: #f2f2f2;
//   right: 0;
//   @media (max-width: 415px) {
//     width: 30vw;
//   }
// `;

// const CheckoutButton = styled.button`
//   background-color: #111;
//   height: 3.5vw;
//   width: 100%;
//   border: none;
//   border-bottom-right-radius: 0.5vh;
//   border-bottom-left-radius: 0.5vh;
// `;
// const OpenCartButton = styled.button`
//   height: 100%;
//   width: 100%;
//   border: none;
//   background-color: #111;
// `;

// // ============================================================
// // Drawer Styles
// // ============================================================
// const DrawerButton = styled.button`
//   height: 3.5vh;
//   width: 3.5vh;
//   background: transparent;
//   border: none;
// `;

// const DrawerBase = styled.div`
//   background-color: #222;
//   height: 100%;
//   width: 100%;
// `;

// // Nav Class
// // ============================================================
// export default class Nav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isCartOpen: false,
//       drawerOpen: false
//     };

//     this.openCheckout = this.openCheckout.bind(this);
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.checkout.lineItems.length === 0) {
//       this.setState({ lineitems: [] });
//     } else {
//       let line_items = nextProps.checkout.lineItems.map(line_item => {
//         return (
//           <LineItem
//             key={line_item.id.toString()}
//             updateQuantityInCart={this.props.updateQuantityInCart}
//             removeLineItemInCart={this.props.removeLineItemInCart}
//             line_item={line_item}
//           />
//         );
//       });
//       console.log('line_items: ', line_items);
//       this.setState({
//         lineitems: line_items,
//         isCartOpen: true
//       });
//     }
//   }

//   handleCartClose = () => {
//     this.setState({ isCartOpen: false });
//   };

//   handleCartOpen = () => {
//     this.setState({ isCartOpen: true });
//   };

//   openCheckout() {
//     window.open(this.props.checkout.webUrl);
//   }

//   openDrawer = () => {
//     const { drawerOpen } = this.state;
//     console.log('Button clicked!');
//     this.setState({ drawerOpen: !drawerOpen });
//   };

//   render() {
//     const { lineitems, isCartOpen, drawerOpen } = this.state;
//     return (
//       <div>
//         <FreeShipping>
//           <FreeShippingText>
//             Free Shipping on all orders worldwide!
//           </FreeShippingText>
//         </FreeShipping>
//         <RootContainer>

//           <LogoWrapper>
//             <LogoImage>StarSigned</LogoImage>
//           </LogoWrapper>
//           <MenuWrapper>
//             <Link to="/">
//               <MenuItemWrapper>
//                 <MenuItem>Home</MenuItem>
//               </MenuItemWrapper>
//             </Link>
//             <CartImageWrapper>
//               <OpenCartButton onClick={this.handleCartOpen}>
//                 <FontAwesomeIcon size="2x" color="#eee" icon={faShoppingCart} />
//               </OpenCartButton>
//             </CartImageWrapper>
//           </MenuWrapper>
//           <Cart
//             checkout={this.props.checkout}
//             handleCartClose={this.handleCartClose}
//             isCartOpen={isCartOpen}
//             line_items={lineitems}
//           />
//         </RootContainer>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LineItem from './LineItem';
import Cart from './Cart';

import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const RootContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 9vw;
  width: 100%;
  background-color: white;
  height: 15vw;
`;

const SiteTopDetail = styled.div`
  position: absolute;
  z-index: 1;
  background-color: white;
  width: 100%;
  height: 9vw;
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
  font-size: 2vw;
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
              Style for the Starbound | What's your Star Sign?
            </TaglineText>
          </TaglineWrapper>
        </SiteTopDetail>

          <RootContainer>
            <LogoWrapper>
              <LogoImage>StarSigned</LogoImage>
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
