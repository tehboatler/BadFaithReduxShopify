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
  width: 50vw;
  height: auto;
  padding: 5vw;
  text-align: center;
  background-color: #f3f3f3;
  border-radius: 1vw;
  -webkit-box-shadow: 0px 3px 30px -2px rgba(54, 54, 54, 0.14);
  -moz-box-shadow: 0px 3px 10px -2px rgba(54, 54, 54, 0.14);
  box-shadow: 0px 3px 10px -2px rgba(54, 54, 54, 0.14);
`;

const ComingSoonText = styled.h1`
  font-family: 'helveticablack', Helvetica, Arial;
  font-size: 3vw;
  color: white;
`;
const ComingSoonSubText = styled.h1`
  font-family: 'helveticablack', Helvetica, Arial;
  font-size: 1.5vw;
  color: #d1d1d1;
`;

export default class DesktopComingSoon extends Component {
  render() {
    return (
      <RootContainer>
        <ComingSoonCard>
          <ComingSoonText>
             🙈 Don't look! We're changing.
          </ComingSoonText>
          <ComingSoonSubText>It's a good thing we've got a great mobile site. 📲</ComingSoonSubText>
        </ComingSoonCard>
      </RootContainer>
    );
  }
}
