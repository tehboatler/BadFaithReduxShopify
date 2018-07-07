import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Spring } from 'react-spring';

import Lined from '../../img/lined-paper-2.png';

import v2Feat1 from '../../img/v2Feat1.jpg';
import v2Feat2 from '../../img/DesktopFeat2.jpg';
import SterlingSilverBracletFeatureImage from '../../img/IntroBannerFeatureImage.jpg';
import SterlingSilverNecklaceImage from '../../img/SterlingSilverNecklace.jpg';
import NewReleasesNecklace from '../../img/SterlingSilverNewReleasesNecklace.jpg';
import SterlingSilverSimpleNecklaceImage from '../../img/SterlingSilverSimpleNecklace.jpg';
import v2Feat3 from '../../img/v2Feat3.jpg';
import v2Feat4 from '../../img/v2Feat4.jpg';
import Header from '../Header';
import IntroBanner from '../IntroBanner';
import BestSellerBanner from '../BestSellerBanner';

import NewReleasesBracelet from '../../img/NewReleasesBracelet.png';

const RootContainer = styled.div`
  padding-top: 25vw;
  width: 100%;
  height: auto;
  background-color: white;
  text-align: center;
  z-index: 2;
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
  align-items: start;
  width: 100vw;
  height: 100vw;
  background-color: #f2f2f2;
  background-image: url(${SterlingSilverBracletFeatureImage});
  background-size: cover;
  background-position: center center;
`;

const SterlingSilverFeatureContentWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-left: -8vw;
  width: 100vw;
  //   padding-right: 15vw;
  height: 30%;
  //   background-color: #131313;
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
  // opacity: 0;
`;

const IntroBannerBottomText_Shift = styled.div`
  margin-left: 30vw;
  background-color: white;
  // opacity: 0;
`;

const SterlingSilverFeatureButton = styled.div`
  border-radius: 1px;
  z-index: 2;
  margin-left: 8vw;
`;

const SterlingSilverFeatureButtonText = styled.h1`
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-size: 4vw;
  color: #131313;
  padding: 3vw 10vw;
  background-color: white;
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
`;

// Feature
// ============================================================

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  margin-bottom: 4vw;
  margin-top: vw;
  z-index: 2;
  background: rgba(240, 239, 238, 1);
  background: -moz-linear-gradient(
    top,
    rgba(240, 239, 238, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(240, 239, 238, 1)),
    color-stop(100%, rgba(255, 255, 255, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(240, 239, 238, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(240, 239, 238, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(240, 239, 238, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(240, 239, 238, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f0efee', endColorstr='#ffffff', GradientType=0 );
`;

const FeatureHeadingWrapper = styled.div`
  width: 100%;
  text-align: left;
  // background-color: white;
  padding: 5% 0;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 90vw;
  margin: 0 5vw;
  border-radius: 1vw;
  z-index: 3;
  overflow: hidden;
`;

const Feature1Image = styled.div`
  width: 90vw;
  height: 90vw;
  z-index: 1;
  background-image: url(${v2Feat1});
  background-size: cover;
  border-radius: 1vw;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;
const Feature2Image = styled.div`
  width: 90vw;
  height: 90vw;
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
  display: flex;
  flex-direction: column;
  text-align: right;
  background-color: #131313;
  width: 90vw;
  height: 10vw;
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
  width: 30vw;
  margin: 3.5vw 34vw;
  border: 0.5vw solid #131313;
  margin-bottom: 10vw;
`;

const ShopNowText = styled.h1`
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-size: 5vw;
  font-weight: 700;
  padding: 1vw;
  margin: 0;
  color: black;
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
  position: fixed;
  height: 30vw;
  width: 100vw;
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
        <VignetteOverlay />
        <Header />

        <Spring
          from={{ opacity: 0, height: '0vw' }}
          to={{ opacity: 1, height: '10vw' }}>
          {styles => (
            <PromoBanner style={styles}>
              <PromoBannerText>
                25% off on Gemini Items storewide! COUPON CODE: GEMINI25
              </PromoBannerText>
            </PromoBanner>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0, backgroundSize: '150%' }}
          to={{ opacity: 1, backgroundSize: '100%' }}>
          {styles => (
            <SterlingSilverFeature style={styles}>
              <SterlingSilverFeatureContentWrapper>
                <IntroBannerTopTextWrapper>
                  <IntroBannerText>925 Sterling/</IntroBannerText>
                </IntroBannerTopTextWrapper>
                <IntroBannerBottomText_Shift>
                  <IntroBannerText>Stainless Steel</IntroBannerText>
                </IntroBannerBottomText_Shift>
                <SterlingSilverFeatureButton>
                  <Link to="/starsigned-sterling-silver-stainless-steel">
                    <SterlingSilverFeatureButtonText>
                      Shop Now
                    </SterlingSilverFeatureButtonText>
                  </Link>
                </SterlingSilverFeatureButton>
              </SterlingSilverFeatureContentWrapper>
            </SterlingSilverFeature>
          )}
        </Spring>

        <FeatureGrid>
          <FeatureHeadingWrapper>
            <FeatureHeading>Titanium Rings:</FeatureHeading>
            <FeatureHeading>StarSigned Sleek & Stylish</FeatureHeading>
          </FeatureHeadingWrapper>

      
            <Feature1>
              <Link to="/starsigned-rings">
                <Feature1Image />
              </Link>
              <Feature1Card />
            </Feature1>
       

          <Fade>
            <Link to="/starsigned-rings">
              <ShopNowWrapper>
                <ShopNowText> Shop Now </ShopNowText>
              </ShopNowWrapper>
            </Link>
          </Fade>

          <FeatureHeadingWrapper>
            <FeatureHeading>Starbound Sterling:</FeatureHeading>
            <FeatureHeading>925 Silver Necklaces</FeatureHeading>
          </FeatureHeadingWrapper>

       
            <Feature1>
              <Link to="/starsigned-necklaces">
                <Feature2Image />
              </Link>
              <Feature1Card />
            </Feature1>
          

          <Fade>
            <Link to="/starsigned-necklaces">
              <ShopNowWrapper>
                <ShopNowText> Shop Now </ShopNowText>
              </ShopNowWrapper>
            </Link>
          </Fade>
        </FeatureGrid>
      </RootContainer>
    );
  }
}
