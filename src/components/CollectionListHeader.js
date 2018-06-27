import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import reactDOM from 'react-dom';
import Sticky from 'react-stickynode';

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
  // background-color: #f2f2f2;
  // background: rgb(0,0,0); /* Old browsers */
  // background: -moz-linear-gradient(top, rgba(0,0,0,1) 14%, rgba(34,34,34,1) 100%); /* FF3.6-15 */
  // background: -webkit-linear-gradient(top, rgba(0,0,0,1) 14%,rgba(34,34,34,1) 100%); /* Chrome10-25,Safari5.1-6 */
  // background: linear-gradient(to bottom, rgba(0,0,0,1) 14%,rgba(34,34,34,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  overflow: hidden;
  @media (max-width: 415px) {

  }
`;

const HeaderLinks = styled.div`
background-color: white;
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 4.5% 5%;
  border-top: 0.5vw black solid;
  -webkit-box-shadow: -3px 10px 13px -1px rgba(0, 0, 0, 0.85);
  -moz-box-shadow: -3px 10px 13px -1px rgba(0, 0, 0, 0.85);
  box-shadow: -3px 10px 13px -1px rgba(0, 0, 0, 0.85);
  z-index: 999;
`;

const LinkText = styled.h1`
  font-size: 3.5vw;
  display: inline;
  background-color: white;
  padding: 2vw 6vw;
  font-weight: 700;
  font-family: 'Roboto Condensed', cursive;
  color: #fff6e5;
  color: black;
  text-decoration: underline;
`;

const VignetteOverlay = styled.div`
  position: fixed;
  height: 15vw;
  width: 100vw;
  opacity: 1;
  bottom: 0;
  mix-blend-mode: multiply;
  margin-left: -16.5%;
  padding-right: 33%;
  background: rgba(255, 255, 255, 0);
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(237, 237, 237, 0.25) 25%,
    rgba(204, 204, 204, 0.48) 48%,
    rgba(140, 140, 140, 0.73) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 0)),
    color-stop(25%, rgba(237, 237, 237, 0.25)),
    color-stop(48%, rgba(204, 204, 204, 0.48)),
    color-stop(73%, rgba(140, 140, 140, 0.73)),
    color-stop(100%, rgba(0, 0, 0, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(237, 237, 237, 0.25) 25%,
    rgba(204, 204, 204, 0.48) 48%,
    rgba(140, 140, 140, 0.73) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(237, 237, 237, 0.25) 25%,
    rgba(204, 204, 204, 0.48) 48%,
    rgba(140, 140, 140, 0.73) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(237, 237, 237, 0.25) 25%,
    rgba(204, 204, 204, 0.48) 48%,
    rgba(140, 140, 140, 0.73) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(237, 237, 237, 0.25) 25%,
    rgba(204, 204, 204, 0.48) 48%,
    rgba(140, 140, 140, 0.73) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#000000', GradientType=0 );
`;

export class CollectionListHeader extends Component {
  render() {
    return (
      <HeaderContainer
        isHome={location.pathname === '/'}
        ref={c => (this.header = reactDOM.findDOMNode(c))}>
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
        <VignetteOverlay />
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
  )(CollectionListHeader)
);
