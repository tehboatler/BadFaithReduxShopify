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

export default class InfluencerGiveaway extends Component {
  render() {
    return (
      <RootContainer>
        <MonthlyGiveawayBannerWrapper />
      </RootContainer>
    );
  }
}
