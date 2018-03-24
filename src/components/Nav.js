import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';

const RootContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  height: 7.5vh;
  width: 100%;
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
color: white;`;

const CartImageWrapper = styled.div`
  display: flex;
  width: 7.5vh;
  height: 7.5vh;
    background-color: orange;
  justify-content: center;
  align-items: center;
`;

export default class Nav extends Component {
  state = {};
  render() {
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
            <Link to="/cart"><FontAwesomeIcon size="2x" color="#111" icon={faShoppingCart} /></Link>
          </CartImageWrapper>
        </MenuWrapper>
      </RootContainer>
    );
  }
}
