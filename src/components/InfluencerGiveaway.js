import React, { Component } from 'react';
import styled from 'styled-components';
import MonthlyGiveaway from '../img/MonthlyGiveawayBanner.jpg';

const RootContainer = styled.div`
  padding-top: 30vw;
`;

// Monthly Giveaway Banner
// ============================================================

const MonthlyGiveawayBannerWrapper = styled.div`
  height: 100vw;
  width: 100vw;
  background-image: url(${MonthlyGiveaway});
  background-size: cover;
`;

const GiveawaySignUpButton = styled.div`
    height: 10vw;
    width: 90vw;
    margin: 0 5vw;
    background-color: lightblue;
`


export default class InfluencerGiveaway extends Component {
    
  GiveawaySignUp = () => {
    window.open('https://mailchi.mp/b6b98550bb92/starsigned');
  };

  render() {
    return (
      <RootContainer>
        <MonthlyGiveawayBannerWrapper />
        <GiveawaySignUpButton onClick={() => this.GiveawaySignUp}>Sign me up!</GiveawaySignUpButton>
      </RootContainer>
    );
  }
}
