import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import reactDOM from 'react-dom';

import HeaderPhone from '../img/BadFaithHeaderPhone.png';

const HeaderContainer = styled.div`
  padding-top: 7.5vh;
  display: flex;
  justify-content: center;
  height: ${({ isHome }) => (isHome ? '70vh' : '0vh')};
  width: 100%;
  background-color: #222;
  overflow: hidden;
`;

// 422 * 749
const PhoneImageWrapper = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 39.44vh;
  height: 70vh;
  //   background-color: red;
  justify-content: center;
`;

const BadFaithLogoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-self: center;
  z-index: 1;
  width: 39.44vh;
  height: 65vh;
  bottom: 5vh;
`;

const BadFaithLogo = styled.h1`
  position: absolute;
  align-self: center;
  color: black;
  z-index: 1;
  bottom: 5vh;
`;

const BadFaithLogoTagline = styled.h2`
  position: absolute;
  align-self: center;
  color: black;
  z-index: 1;
  bottom: 0;
`;

const PhoneImage = styled.img`
  position: absolute;
  transform: translate3d(0, 15vh, 0);
  width: 39.44vh;
  height: 70vh;
`;

export class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (location.pathname !== prevProps.location.pathname) {
      if (location.pathname === '/') {
        this.header.animate([{ height: '0vh' }, { height: '70vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)'
        });
      } else {
        if (prevProps.location.pathname === '/') {
          this.header.animate([{ height: '70vh' }, { height: '0vh' }], {
            duration: 300,
            fill: 'forwards',
            easing: 'cubic-bezier(0.86, 0, 0.07, 1)'
          });
        }
      }
    }
  }

  render() {
    return (
      <HeaderContainer
        isHome={location.pathname === '/'}
        ref={c => (this.header = reactDOM.findDOMNode(c))}
      >
        <PhoneImageWrapper>
          <BadFaithLogoContainer>
            <BadFaithLogo>BadFaith</BadFaithLogo>
            <BadFaithLogoTagline>Not just a case.</BadFaithLogoTagline>
          </BadFaithLogoContainer>
          <PhoneImage src={HeaderPhone} />
        </PhoneImageWrapper>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
