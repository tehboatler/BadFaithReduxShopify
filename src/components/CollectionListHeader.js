import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import reactDOM from 'react-dom';
import Sticky from 'react-stickynode';
import Pulse from 'react-reveal/Pulse';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
  background-color: #f2f2f2;
  -webkit-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.14);
  -moz-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.14);
  box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.14);
  // background: rgb(0,0,0); /* Old browsers */
  // background: -moz-linear-gradient(top, rgba(0,0,0,1) 14%, rgba(34,34,34,1) 100%); /* FF3.6-15 */
  // background: -webkit-linear-gradient(top, rgba(0,0,0,1) 14%,rgba(34,34,34,1) 100%); /* Chrome10-25,Safari5.1-6 */
  // background: linear-gradient(to bottom, rgba(0,0,0,1) 14%,rgba(34,34,34,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  z-index: 4;
  overflow: hidden;
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
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 4.5% 5%;
  -webkit-box-shadow: 0px 10px 5px -1px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 10px 5px -1px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 10px 5px -1px rgba(0, 0, 0, 0.05);
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
  color: #111;
  border-radius: 1vw;
  border: 1px solid #eee;
  text-decoration: none;
`;

const LinkTextSelected = styled.h1`
  font-size: 3vw;
  display: inline;
  background-color: #222;
  padding: 2vw 4vw;
  font-weight: 700;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  color: #eee;
  border-radius: 1vw;
  text-decoration: underline;
`;

export class Header extends Component {
  render() {
    const { selectionToggle } = this.props;
    return (
      <HeaderContainer>
        <Sticky innerZ={3} enablion={true} top={0} bottomBoundary={2400}>
          {selectionToggle === 'StarSigned Keepsakes' && (
            <HeaderLinks>
              <Link to="/lunar-crescent-collection">
                <LinkText>Lunar Crescent Collection</LinkText>
              </Link>
              <Pulse>
                <Link to="/starsigned-keepsakes">
                  <LinkTextSelected>StarSigned Keepsakes</LinkTextSelected>
                </Link>
              </Pulse>
            </HeaderLinks>
          )}
          {selectionToggle === 'Lunar Crescent Collection' && (
            <HeaderLinks>
              <Pulse>
                <Link to="/lunar-crescent-collection">
                  <LinkTextSelected>Lunar Crescent Collection</LinkTextSelected>
                </Link>
              </Pulse>
              <Link to="/starsigned-keepsakes">
                <LinkText>StarSigned Keepsakes</LinkText>
              </Link>
            </HeaderLinks>
          )}
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
