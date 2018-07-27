import React, { Component } from 'react';
import styled from 'styled-components';

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

const ComingSoonCard = styled.div`
  width: 33vw;
  height: auto;
  padding: 5vw;
  text-align: center;
  background-color: #fff;
  border-radius: 1vw;
  // -webkit-box-shadow: 0px 3px 30px -2px rgba(54, 54, 54, 0.14);
  // -moz-box-shadow: 0px 3px 10px -2px rgba(54, 54, 54, 0.14);
  // box-shadow: 0px 3px 10px -2px rgba(54, 54, 54, 0.14);
`;

const ComingSoonText = styled.h1`
  font-family: 'helveticablack', Helvetica, Arial;
  font-size: 1.5vw;
  color: black;
`;
const ComingSoonSubText = styled.h1`
  font-family: 'Roboto', Helvetica, Arial;
  font-size: 1vw;
  color: #222;
`;

export default class DesktopComingSoon extends Component {
  render() {
    return (
      <RootContainer>
        <ComingSoonCard>
          <ComingSoonText>
             🙈 Don't look! We're getting changed.
          </ComingSoonText>
          <ComingSoonSubText>It's a good thing we've got a great mobile site. 📲</ComingSoonSubText>
        </ComingSoonCard>
      </RootContainer>
    );
  }
}
