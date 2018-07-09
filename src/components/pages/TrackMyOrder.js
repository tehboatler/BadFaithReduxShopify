import React, { Component } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  height: auto;
  padding-top: 30vw;
  overflow: hidden;
`;

const Header = styled.h1`
  font-size: 5.5vw;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  color: black;
  padding-left: 5vw;
`;

const TrackMyOrderWidget = styled.div`
width: 100%;
height: auto;
    
`

export default class SupportCenter extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);

  }

  TrackMyOrderWidget = () => {
    return {
      __html: `<div class="as-track-button" data-size="large" data-domain="starsigned.aftership.com"></div>`
    };
  };

  render() {
    return (
      <Root>
        <Header>Track My Order</Header>
        <TrackMyOrderWidget
          dangerouslySetInnerHTML={{ __html: this.TrackMyOrderWidget() }}
        />
      </Root>
    );
  }
}
