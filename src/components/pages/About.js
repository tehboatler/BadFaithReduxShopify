import React, { Component } from 'react';
import styled from 'styled-components';

const RootContainer = styled.div`
  height: 20vw;
  width: 100%;
`;

const Heading = styled.h1`
  font-family: 'Permanent Marker', Arial, Helvetica;
  font-size: 4vw;
  background-color: red;
  color: white;
`;

export default class About extends Component {
  render() {
    return (
      <RootContainer>
        <Heading>Who is StarSigned?</Heading>
      </RootContainer>
    );
  }
}
