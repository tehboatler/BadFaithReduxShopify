import React, { Component } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';



import v2Feat1 from '../../img/v2Feat1.jpg';
import DesktopFeat2 from '../../img/DesktopFeat2.jpg';

// Feature
// ============================================================

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  margin-bottom: 4vw;
`;

const Feature = styled.div`
  height: 50vw;
  width: 33vw;
  margin: 0 2vw;
  background-color: white;
  text-align: left;
  overflow: hidden;
  z-index: 1;
`;

const FeatureHeading = styled.h1`
  font-family: 'Archivo Black', Arial, Helvetica, sans-serif;
  font-size: 1.7vw;
  color: black;
  background-color: white;
  margin: 0;
`;
const Feature1Image = styled.div`
  width: 33vw;
  height: 33vw;
  background-image: url(${v2Feat1});
  background-size: cover;
  padding-top: 1vw;
`;
const Feature2Image = styled.div`
  width: 33vw;
  height: 33vw;
  background-image: url(${DesktopFeat2});
  background-size: cover;
  padding-top: 1vw;
`;

const FeatureDescription = styled.div`
  background-color: #131313;
  height: 5%;
  width: 100%;
`;

const ShopNowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  margin: 1vw 10vw;
  border: 0.1vw solid black;
`;

const ShopNowText = styled.h1`
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-size: 2vw;
  font-weight: 700;
  padding: 1vw;
  margin: 0;
  color: black;
`;

export default class FeaturedGrid extends Component {
  render() {
    return (
      <FeatureGrid>
        <Feature>
          <FeatureHeading>Titanium Rings:</FeatureHeading>
          <FeatureHeading>StarSigned Sleek & Stylish</FeatureHeading>
          <Link to="/starsigned-rings">
          <Feature1Image />
          </Link>
          <FeatureDescription />
          <Fade bottom>
          <Link to="/starsigned-rings">
          <ShopNowWrapper>
          <ShopNowText> Shop Now </ShopNowText>
          </ShopNowWrapper>
          </Link>
          </Fade>
        </Feature>
        <Feature>
          <FeatureHeading>It's In The Stars:</FeatureHeading>
          <FeatureHeading>StarSigned Sterling Silver</FeatureHeading>
          <Link to="/starsigned-necklaces">
          <Feature2Image />
          </Link>
          <FeatureDescription />
          <Fade bottom>
          <Link to="/starsigned-necklaces">
          <ShopNowWrapper>
            <ShopNowText> Shop Now </ShopNowText>
          </ShopNowWrapper>
          </Link>
        </Fade>
        </Feature>
      </FeatureGrid>
    );
  }
}
