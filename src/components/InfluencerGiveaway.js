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

const KlaviyoFormWrapper = styled.div`
  height: 100vw;
  width: 100vw;
`;

export default class InfluencerGiveaway extends Component {

  KlaviyoForm = () => {
    return {
      __html: `<div class="klaviyo-form-JC4Laz"></div>`
    };
  };

  render() {
    return (
      <RootContainer>
        <MonthlyGiveawayBannerWrapper />
        <KlaviyoFormWrapper
          dangerouslySetInnerHTML={this.KlaviyoForm()}
        />
      </RootContainer>
    );
  }
}
