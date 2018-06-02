import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import reactDOM from 'react-dom';

import Lined from '../img/lined-paper-2.png';
import HeaderFeature from '../img/NecklacesHeader.png';
import MobileHeroFeature from '../img/NecklacesHeaderMobile.jpg';

const HeaderContainer = styled.div`
  padding-top: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
  background-color: #f2f2f2;
  // background: rgb(0,0,0); /* Old browsers */
  // background: -moz-linear-gradient(top, rgba(0,0,0,1) 14%, rgba(34,34,34,1) 100%); /* FF3.6-15 */
  // background: -webkit-linear-gradient(top, rgba(0,0,0,1) 14%,rgba(34,34,34,1) 100%); /* Chrome10-25,Safari5.1-6 */
  // background: linear-gradient(to bottom, rgba(0,0,0,1) 14%,rgba(34,34,34,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

  background-image: url(${Lined});
  overflow: hidden;
  @media (max-width: 415px) {
    padding-top: 22.5vw;
    background-color: #000;
  }
`;


const HeaderTaglineWrapper = styled.div`
  // background-color: #121212;
  height: auto;
  width: 100%;
  text-align: center;
  align-items: center;
`;

const HeaderTagline = styled.h1`
  color: white;
  font-size: 10vw;
  font-weight: 700;
  font-family: 'Amatic SC', cursive;
`;

const HeaderLinks = styled.div`
  background-color: #121212;
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 3% 5%;
`

const LinkText = styled.h1`
font-size: 6vw;
display: inline;
font-weight: 700;
font-family: 'Amatic SC', cursive;
color: white;
text-decoration: underline;
  
`

export class Header extends Component {
  render() {
    return (
      <HeaderContainer
        isHome={location.pathname === '/'}
        ref={c => (this.header = reactDOM.findDOMNode(c))}
      >
        <HeaderTaglineWrapper>
          <HeaderTagline>Style for the StarBound</HeaderTagline>
        </HeaderTaglineWrapper>
        <HeaderLinks>
          <Link to="/starsigned-rings"><LinkText>Rings</LinkText></Link>
          <Link to="/starsigned-necklaces"><LinkText>Necklaces</LinkText></Link>
          <Link to="/starsigned-bracelets"><LinkText>Bracelets</LinkText></Link>
          <Link to="/starsigned-lights-home"><LinkText>Lights&Home</LinkText></Link>
        </HeaderLinks>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
