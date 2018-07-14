import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import reactDOM from 'react-dom';
import Sticky from 'react-stickynode';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
  background-color: #f2f2f2;
  margin-top: 1vw;
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
  width: 90%;
  padding: 4.5% 5%;
  -webkit-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  z-index: 5;
`;

const LinkText = styled.h1`
  font-size: 3vw;
  display: inline;
  background-color: white;
  padding: 2vw 4vw;
  font-weight: 700;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  color: #fff6e5;
  color: black;
  text-decoration: underline;
`;

export class Header extends Component {
  render() {
    return (
      <HeaderContainer
        isHome={location.pathname === '/'}
        ref={c => (this.header = reactDOM.findDOMNode(c))}>
        <Sticky innerZ={4} enabled={true} top={0} bottomBoundary={2400}>
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
          </HeaderLinks>
        </Sticky>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);

// <Link to="/starsigned-lights-home">
// <LinkText>HOME</LinkText>
// </Link>
