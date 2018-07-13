import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import { Spring } from 'react-spring';

import Lined from '../../img/lined-paper-2.png';

import v2Feat1 from '../../img/v2Feat1.jpg';
import v2Feat2 from '../../img/DesktopFeat2.jpg';
// import SterlingSilverBracletFeatureImage from '../../img/IntroBannerFeatureImage.jpg';
import SterlingSilverNecklaceImage from '../../img/SterlingSilverNecklace.jpg';
import NewReleasesNecklace from '../../img/SterlingSilverNewReleasesNecklace.jpg';
import SterlingSilverSimpleNecklaceImage from '../../img/SterlingSilverSimpleNecklace.jpg';
import v2Feat3 from '../../img/v2Feat3.jpg';
import v2Feat4 from '../../img/v2Feat4.jpg';
import Header from '../Header';
import IntroBanner from '../IntroBanner';
import BestSellerBanner from '../BestSellerBanner';
import MonthlyGiveaway from '../../img/MonthlyGiveawayBanner.jpg';
import Feature2PromoBanner from '../../img/Feature2PromoBanner.jpg';

import NewReleasesBracelet from '../../img/NewReleasesBracelet.png';

const RootContainer = styled.div`
  padding-top: 25vw;
  width: 100%;
  height: auto;
  background-color: white;
  text-align: center;
  z-index: 2;
`;

// Monthly Banner
// ============================================================

const MonthlyGiveawayBannerWrapper = styled.div`
  position: relative;
  text-align: center;
  height: 100vw;
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

// Promo Banner
// ============================================================
const PromoBanner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  height: 10vw;
  width: 100%;
  justify-content: center;
  align-items: flex-end;

  margin-bottom: 1vw;
  background-color: #f5f5f5;
`;

const PromoBannerText = styled.h1`
  font-family: 'helveticablack', Arial;
  align-self: flex-end;
  font-size: 2vw;
  padding-right: 3vw;
  color: black;
`;

// Sterling Silver Feature
// ============================================================

const SterlingSilverFeature = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 92.5vw;
  margin: 0 3.75vw;
  height: 92.5vw;
  background-color: #f2f2f2;
  background-image: url(${Feature2PromoBanner});
  background-size: cover;
  background-position: center center;
`;

const SterlingSilverFeatureContentWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  // margin-left: -8vw;
  width: 100%;
  //   padding-right: 15vw;
  height: 30%;
  // background-color: #131313;
  text-align: center;
  // opacity: 0.8;
`;

const IntroBannerText = styled.h1`
  font-family: 'helveticablack', Courier, monospace;
  font-size: 8vw;
  line-height: 0;
  // background-color: white;
  color: black;
  font-weight: 700vw;
`;

const IntroBannerTopTextWrapper = styled.div`
  background-color: #f2f2f2;
  opacity: 0;
`;

const IntroBannerBottomText_Shift = styled.div`
  margin-left: 30vw;
  background-color: white;
  opacity: 0;
`;

const SterlingSilverFeatureButton = styled.div`
  // border-radius: 1px;
  z-index: 2;
  // opacity: 0;
  // background-color: red;
`;

const SterlingSilverFeatureButtonText = styled.h1`
  font-family: 'Archivo Black', Arial, Helvetica, sans-serif;
  border: 0.5vw solid #eee;
  font-size: 4vw;
  color: #131313;
  padding: 3vw 10vw;
  background-color: white;
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
  // border: 2px black solid;
  -webkit-box-shadow: 0px 3px 30px -2px rgba(54, 54, 54, 0.14);
  -moz-box-shadow: 0px 3px 10px -2px rgba(54, 54, 54, 0.14);
  box-shadow: 0px 3px 10px -2px rgba(54, 54, 54, 0.14);
`;

// Feature Blurb
// ============================================================

const FeatureBlurb = styled.div`
  width: 90%;
  margin: 0 5%;
  margin-top: 3vw;
  background-color: white;
  height: auto;
`;

const FeatureBlurbHeading = styled.h1`
  font-family: 'Archivo Black', Helvetica, Arial;
  font-size: 5vw;
  color: black;
  margin: 0;
  padding: 2vw;
`;

const FeatureBlurbSubText = styled.h1`
  font-family: 'Roboto Condensed', Helvetica, Arial;
  font-size: 4vw;
  color: black;
  margin: 0;
  padding: 2vw 10vw;
`;

// Feature
// ============================================================

const FeatureGrid = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  margin-bottom: 4vw;
  width: 95%;
  margin: 0 2.5%;
  z-index: 2;
  background-color: white;
  // background: rgba(240, 239, 238, 1);
  // background: -moz-linear-gradient(
  //   top,
  //   rgba(240, 239, 238, 1) 0%,
  //   rgba(255, 255, 255, 1) 100%
  // );
  // background: -webkit-gradient(
  //   left top,
  //   left bottom,
  //   color-stop(0%, rgba(240, 239, 238, 1)),
  //   color-stop(100%, rgba(255, 255, 255, 1))
  // );
  // background: -webkit-linear-gradient(
  //   top,
  //   rgba(240, 239, 238, 1) 0%,
  //   rgba(255, 255, 255, 1) 100%
  // );
  // background: -o-linear-gradient(
  //   top,
  //   rgba(240, 239, 238, 1) 0%,
  //   rgba(255, 255, 255, 1) 100%
  // );
  // background: -ms-linear-gradient(
  //   top,
  //   rgba(240, 239, 238, 1) 0%,
  //   rgba(255, 255, 255, 1) 100%
  // );
  // background: linear-gradient(
  //   to bottom,
  //   rgba(240, 239, 238, 1) 0%,
  //   rgba(255, 255, 255, 1) 100%
  // );
  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f0efee', endColorstr='#ffffff', GradientType=0 );
`;

const FeatureHeadingWrapper = styled.div`
  width: 95%;
  text-align: left;
  // background-color: white;
  padding: 5% 2.5%;
  padding-bottom: 2.5%;
`;

const FeatureHeading = styled.h1`
  font-family: 'helveticablack', Arial, Helvetica, sans-serif;
  font-size: 4vw;
  color: black;
  // background-color: white;
  margin: 0 5%;
`;

const Feature1 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  margin: 0vw 0vw;
  // border-radius: 1vw;
  z-index: 3;
  overflow: hidden;
`;

const Feature1Image = styled.div`
  width: 95vw;
  height: 95vw;
  z-index: 1;
  background-image: url(${v2Feat1});
  background-size: cover;
  border-radius: 1vw;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;
const Feature2Image = styled.div`
  width: 95vw;
  height: 95vw;
  background-image: url(${v2Feat2});
  background-size: cover;
  border-radius: 1vw;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;
const Feature3Image = styled.div`
  width: 100vw;
  height: 100vw;
  background-image: url(${v2Feat3});
  background-size: cover;
`;
const Feature4Image = styled.div`
  width: 100vw;
  height: 115.67vw;
  background-image: url(${v2Feat4});
  background-size: cover;
`;

const Feature1Card = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: right;
  background-color: #fff;
  width: 95vw;
  height: 5vw;
  border-bottom-left-radius: 1vw;
  border-bottom-right-radius: 1vw;
`;

const Feature1CardTitle = styled.h1`
  font-family: 'Roboto Condensed', cursive;
  font-size: 6vw;
  font-weight: 700;
  color: white;
  margin: 5vw 0;
  padding-right: 2vw;
`;

const Feature1CardButtonAndPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 2vw;
`;

const FeatureButton = styled.h1`
  font-family: 'Roboto Condensed', cursive;
  font-size: 5vw;
  background-color: white;
  font-weight: 700;
  color: black;
  margin: 0;
  margin-left: 2vw;
  margin-bottom: 2vw;
  padding: 2vw;
`;
const FeaturePrice = styled.h1`
  font-family: 'Roboto Condensed', cursive;
  font-size: 6vw;
  font-weight: 700;
  color: white;
  margin: 0;
`;

//  Shop Now Button
// ============================================================

const ShopNowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: auto;
  width: auto;
  margin: 3.5vw 10vw;
  border-radius: 0.5vw;
  background-color: #fff;
  margin-bottom: 10vw;
  padding: 2vw;
  border: 0.5vw solid #eee;
  -webkit-box-shadow: 0px 3px 30px -2px rgba(54, 54, 54, 0.14);
  -moz-box-shadow: 0px 3px 10px -2px rgba(54, 54, 54, 0.14);
  box-shadow: 0px 3px 10px -2px rgba(54, 54, 54, 0.14);
`;

const ShopNowText = styled.h1`
  font-family: 'Archivo Black', Arial, Helvetica, sans-serif;
  font-size: 3.5vw;
  font-weight: 700;
  padding: 1vw;
  margin: 0;
  color: #1e1e1e;
`;

// Misc
// ============================================================

const MediumBlackSeparator = styled.div`
  background-color: #131313;
  height: 3vw;
`;

const WhiteSeparator = styled.div`
  background-color: #f2f2f2;
  height: 3vw;
`;

const VignetteOverlay = styled.div`
  pointer-events: none;
  position: fixed;
  z-index: 2;
  height: 30vw;
  width: 100%;
  opacity: 0.7;
  bottom: 0;
  mix-blend-mode: multiply;
  margin-left: -16.5%;
  padding-right: 33%;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 237, 237, 1) 25%,
    rgba(204, 204, 204, 1) 48%,
    rgba(140, 140, 140, 1) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(25%, rgba(237, 237, 237, 1)),
    color-stop(48%, rgba(204, 204, 204, 1)),
    color-stop(73%, rgba(140, 140, 140, 1)),
    color-stop(100%, rgba(0, 0, 0, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 237, 237, 1) 25%,
    rgba(204, 204, 204, 1) 48%,
    rgba(140, 140, 140, 1) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 237, 237, 1) 25%,
    rgba(204, 204, 204, 1) 48%,
    rgba(140, 140, 140, 1) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 237, 237, 1) 25%,
    rgba(204, 204, 204, 1) 48%,
    rgba(140, 140, 140, 1) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 237, 237, 1) 25%,
    rgba(204, 204, 204, 1) 48%,
    rgba(140, 140, 140, 1) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#000000', GradientType=0 );
`;

export default class Featured extends Component {
  state = {};

  render() {
    return (
      <RootContainer>
        {/* */}
        {/* */}

        <Header />

        {/* */}
        {/* PROMO BANNER */}

        <Spring
          from={{ opacity: 0, height: '0vw' }}
          to={{ opacity: 1, height: '10vw' }}>
          {styles => (
            <PromoBanner style={styles}>
              <PromoBannerText>
                25% off on Cancer Items storewide! COUPON CODE: CANCER25
              </PromoBannerText>
            </PromoBanner>
          )}
        </Spring>
        <MonthlyGiveawayBannerWrapper>
          <Link to="starsigned-necklaces/sterling-silver-starsigned-necklace">
            <LearnMoreButton>Shop Now</LearnMoreButton>
          </Link>
        </MonthlyGiveawayBannerWrapper>

        {/* */}
        {/* FEATURE GRID START */}

        <FeatureGrid>
          {/* */}
          {/* FEATURE 1*/}

          <Feature1>
            <FeatureHeadingWrapper>
              <FeatureHeading>Starbound Stainless:</FeatureHeading>
              <FeatureHeading>Charms from the Stars</FeatureHeading>
            </FeatureHeadingWrapper>

            <Fade>
              <Link to="/starsigned-sterling-silver-stainless-steel">
                <Feature3Image />
              </Link>
            </Fade>
          </Feature1>

          <Fade>
            <Link to="/starsigned-sterling-silver-stainless-steel">
              <Pulse>
                <ShopNowWrapper>
                  <ShopNowText> Shop Stainless & Sterling </ShopNowText>
                </ShopNowWrapper>
              </Pulse>
            </Link>
          </Fade>

          {/* */}
          {/* FEATURE 2*/}

          <Feature1>
            <FeatureHeadingWrapper>
              <FeatureHeading>Better than a Hair-Tie:</FeatureHeading>
              <FeatureHeading>StarSigned Wrist Decor</FeatureHeading>
            </FeatureHeadingWrapper>

            <Fade>
              <Link to="/starsigned-bracelets">
                <Feature2Image />
              </Link>
            </Fade>
          </Feature1>

          <Fade>
            <Link to="/starsigned-braclets">
              <Pulse>
                <ShopNowWrapper>
                  <ShopNowText> Shop Bracelets </ShopNowText>
                </ShopNowWrapper>
              </Pulse>
            </Link>
          </Fade>

          {/* */}
          {/* FEATURE 3*/}

          <FeatureHeadingWrapper>
            <FeatureHeading>Sterling Rings:</FeatureHeading>
            <FeatureHeading>StarSigned Sleek & Stylish</FeatureHeading>
          </FeatureHeadingWrapper>

          <Feature1>
            <Fade>
              <Link to="/starsigned-rings">
                <Feature1Image />
              </Link>
            </Fade>
          </Feature1>

          <Fade>
            <Link to="/starsigned-rings">
              <Pulse>
                <ShopNowWrapper>
                  <ShopNowText> Shop Rings </ShopNowText>
                </ShopNowWrapper>
              </Pulse>
            </Link>
          </Fade>

          {/* */}
          {/* FEATURES END*/}
        </FeatureGrid>

        {/* */}
        {/* THANK YOU MESSAGE*/}

        <FeatureBlurbHeading>A Thank You from StarSigned:</FeatureBlurbHeading>
        <Fade bottom>
          <FeatureBlurbSubText>
            We are a small hole-in-the-wall collection of the best astrological
            charms and trinkets you didn’t know could be this cute.
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
        </Fade>

        {/* */}
      </RootContainer>
    );
  }
}

// <FeatureBlurb>
// <FeatureBlurbSubText>
// A small collection of the
// best StarSigned merch a girl can wear, all in one place.
// </FeatureBlurbSubText>
// </FeatureBlurb>
