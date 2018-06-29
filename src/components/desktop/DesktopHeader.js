import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import reactDOM from 'react-dom';
import Sticky from 'react-stickynode';

// ============================================================
// Styles
// ============================================================

const HeaderContainer = styled.div`
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
  overflow: hidden;
  z-index: 3;
`;

const HeaderTaglineWrapper = styled.div`
  // background-color: #121212;
  height: auto;
  width: 100%;
  text-align: center;
  align-items: center;
  -webkit-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  z-index: 2;
`;

const HeaderTagline = styled.h1`
  color: white;
  font-size: 4vw;
  font-weight: 700;
  font-family: 'Permanent Marker', cursive;
`;

const HeaderLinks = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 1% 25%;
  -webkit-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  z-index: 5;
`;

const LinkText = styled.h1`
  font-size: 1vw;
  display: inline;
  background-color: white;
  padding: 1vw 2vw;
  font-weight: 700;
  font-family: 'Roboto Condensed', cursive;
  color: #fff6e5;
  color: black;
  text-decoration: underline;
`;

// ============================================================
// Vignette
// ============================================================

const VignetteOverlay = styled.div`
  position: fixed;
  height: 15vw;
  width: 100vw;
  opacity: 0.25;
  bottom: 0;
  margin-left: -25%;
    padding-right: 50%;
  mix-blend-mode: multiply;
  background: rgba(0, 0, 0, 0);
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.16) 16%,
    rgba(0, 0, 0, 0.35) 35%,
    rgba(0, 0, 0, 0.58) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(16%, rgba(0, 0, 0, 0.16)),
    color-stop(35%, rgba(0, 0, 0, 0.35)),
    color-stop(58%, rgba(0, 0, 0, 0.58)),
    color-stop(100%, rgba(0, 0, 0, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.16) 16%,
    rgba(0, 0, 0, 0.35) 35%,
    rgba(0, 0, 0, 0.58) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.16) 16%,
    rgba(0, 0, 0, 0.35) 35%,
    rgba(0, 0, 0, 0.58) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.16) 16%,
    rgba(0, 0, 0, 0.35) 35%,
    rgba(0, 0, 0, 0.58) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.16) 16%,
    rgba(0, 0, 0, 0.35) 35%,
    rgba(0, 0, 0, 0.58) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=0 );
`;

export class DesktopHeader extends Component {
    
  render() {
    return (
      <HeaderContainer
        isHome={location.pathname === '/'}
        ref={c => (this.header = reactDOM.findDOMNode(c))}
      >
        
        <Sticky innerZ={3} enabled={true} top={0} bottomBoundary={2400}>
        <HeaderLinks>
    <Link to="/starsigned-rings">
    <LinkText>RINGS</LinkText>
    </Link>
    <Link to="/starsigned-necklaces">
    <LinkText>NECKLACES</LinkText>
    </Link>
    <Link to="/starsigned-bracelets">
    <LinkText>BRACELETS</LinkText>
    </Link>
    <Link to="/starsigned-lights-home">
    <LinkText>HOME</LinkText>
    </Link>
    </HeaderLinks>
    </Sticky>
    <VignetteOverlay/>
    </HeaderContainer>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DesktopHeader));
