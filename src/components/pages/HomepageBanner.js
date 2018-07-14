import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import MonthlyGiveaway from '../../img/MonthlyGiveawayBanner.jpg';

const RootContainer = styled.div`
  padding-top: 27.5vw;
`;

// BANNER
// ============================================================

const MonthlyGiveawayBannerWrapper = styled.div`
  position: relative;
  text-align: center;
  height: 128.80vw;
  width: 100vw;
  background-image: url(${MonthlyGiveaway});
  background-size: cover;
`;

const LearnMoreButton = styled.h1`
  position: absolute;
  bottom: 10vw;
  font-family: 'helveticablack', Helvetica, Arial;
  font-size: 4vw;
  width: 40%;
  margin: 0 30%;
  background-color: white;
  color: #111;
  padding: 1vw;
`;

// THANK YOU MESSAGE - Feature Blurb
// ============================================================

const ThankYouMessageWrapper = styled.div`
  width: 90%;
  padding: 20% 5%;
  background-color: #111;
`;

const FeatureBlurb = styled.div`
  width: 90%;
  margin: 0 5%;
  margin-top: 3vw;
  background-color: #f5f5f5;
  height: auto;
`;

const FeatureBlurbHeading = styled.h1`
  font-family: 'Archivo Black', Helvetica, Arial;
  font-size: 5vw;
  color: #d1d1d1;
  margin: 0;
  padding: 2vw;
`;

const FeatureBlurbSubText = styled.h1`
  font-family: 'Roboto Condensed', Helvetica, Arial;
  font-size: 4vw;
  color: #555;
  margin: 0;
  padding: 2vw 10vw;
`;

export default class HomepageBanner extends Component {
  render() {
    return (
      <RootContainer>
        {/* BANNER*/}
        <MonthlyGiveawayBannerWrapper>
          <Link to="/featured">
            <LearnMoreButton>Shop Now</LearnMoreButton>
          </Link>
        </MonthlyGiveawayBannerWrapper>

        {/* THANK YOU MESSAGE*/}
        <ThankYouMessageWrapper>
          <FeatureBlurbHeading>
            A Thank You from StarSigned:
          </FeatureBlurbHeading>
          <Fade bottom>
            <FeatureBlurbSubText>
              Established June of 2018, we are a small hole-in-the-wall collection of the best
              astrological charms and trinkets you didn’t know could be this
              cute.
            </FeatureBlurbSubText>
          </Fade>
          <Fade bottom>
            <FeatureBlurbSubText>
              Our horoscopes told us great things were in the stars for us.
            </FeatureBlurbSubText>
          </Fade>
          <Fade bottom>
            <FeatureBlurbSubText>
              So we made StarSigned to send you keepsakes that might remind you
              that great things are in the stars for you too.
            </FeatureBlurbSubText>
            <FeatureBlurbSubText>
            Thank you for supporting the StarSigned Revolution 💛
          </FeatureBlurbSubText>
          </Fade>
        </ThankYouMessageWrapper>
      </RootContainer>
    );
  }
}
