import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Feature1Img from '../../img/Feat1.jpg';
import Feature2Img from '../../img/Feat2.jpg';
import Feature3Img from '../../img/Feat3.jpg';
import Feature4Img from '../../img/Feat4.jpg';
import Feature5Img from '../../img/Feat5.jpg';
import Feature6Img from '../../img/Feat6.jpg';

import v2Feat1 from '../../img/v2Feat1.jpg';
import v2Feat2 from '../../img/v2Feat2.jpg';
import v2Feat3 from '../../img/v2Feat3.jpg';
import v2Feat4 from '../../img/v2Feat4.jpg';

const RootContainer = styled.div`
  width: 65%;
  margin: 0 17.5%;
  height: auto;
  background-color: #fff;
  @media (max-width: 415px) {
    width: 100%;
    margin: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  margin-top: 2vw;
  grid-template-rows: 66vw 66vw 66vw 66vw;
  grid-gap: 0.2vw;
  @media (max-width: 415px) {
    width: 99%;
    margin: 0.5% 0.5%;
  }
`;

const Feature = styled.div`
  background-color: #121212;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

// Feature 1 Content
// ============================================================
const FeatureCardContent = styled.div`
  width: 40%;
  height: 100%;
  background-color: #121212;
  text-align: left;
  padding: 2vw;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FeatureCardTitle = styled.h1`
  font-size: 6vw;
  display: inline;
  font-weight: 700;
  font-family: 'Amatic SC', cursive;
  color: white;
  text-decoration: underline;
`;

const FeatureCardProductTitleWrapper = styled.div`
  height: 33%;
  display: flex;
  flex-direction: column;
`;

const FeatureCardProductTitle = styled.h1`
  line-height: 0;
  font-size: 6vw;
  display: inline;
  font-weight: 700;
  font-family: 'Amatic SC', cursive;
  color: white;
  text-decoration: underline;
`;
const FeatureCardProductPrice = styled.h1`
  font-size: 5vw;
  background-color: red;
  display: inline;
  font-weight: 700;
  font-family: 'Gamja Flower', cursive;
  color: white;
`;
const CardButton = styled.div`
  border: 5px solid white;
  height: 50px;
  width: 90%;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;

const CardButtonText = styled.h1`
  font-size: 6vw;
  display: inline;
  font-weight: 700;
  font-family: 'Amatic SC', cursive;
  color: white;
  text-decoration: none;
`;

const FeatureCardImage = styled.div`
  width: 60%;
  height: 100%;
  background-color: #333;
  background-image: url(${v2Feat1});
  background-size: contain;
`;

const Feat1Image = styled.div`
  width: 60%;
  height: 100%;
  background-color: #333;
  background-image: url(${v2Feat1});
  background-size: contain;
`;

const Feat2Image = styled.div`
  width: 60%;
  height: 100%;
  background-color: #333;
  background-image: url(${v2Feat2});
  background-size: contain;
`;
const Feat3Image = styled.div`
  width: 60%;
  height: 100%;
  background-color: #333;
  background-image: url(${v2Feat3});
  background-size: contain;
`;
const Feat4Image = styled.div`
  width: 60%;
  height: 100%;
  background-color: #333;
  background-image: url(${v2Feat4});
  background-size: contain;
`;

const Featured = () => {
  return (
    <RootContainer>
      <Grid>
        <Feature>
          <Feat1Image />
          <FeatureCardContent>
            <FeatureCardTitle>
              StarSigned Birthstone Pendant Necklace
            </FeatureCardTitle>
            <FeatureCardProductPrice>$19.95USD</FeatureCardProductPrice>
            <CardButton>
            <Link to="/starsigned-necklaces" style={{textDecoration: "none"}}>
              <CardButtonText>Shop Necklaces</CardButtonText>
              </Link>
            </CardButton>
          </FeatureCardContent>
        </Feature>

        <Feature>
          <FeatureCardContent>
            <FeatureCardTitle>
              Virgo Star-Crossed Link Bracelet
            </FeatureCardTitle>
            <FeatureCardProductPrice>$12.95USD</FeatureCardProductPrice>
            <CardButton>
            <Link to="/starsigned-bracelets" style={{textDecoration: "none"}}>
            <CardButtonText>Shop Bracelets</CardButtonText>
            </Link>
            </CardButton>
            </FeatureCardContent>
            <Feat2Image />
            </Feature>
            
            <Feature>
            <Feat3Image />
            <FeatureCardContent>
            <FeatureCardTitle>Titanium Rose-Gold StarSigned Rings</FeatureCardTitle>
            <FeatureCardProductPrice>$14.95USD</FeatureCardProductPrice>
            <CardButton>
            <Link to="/starsigned-rings" style={{textDecoration: "none"}}>
            <CardButtonText>Shop Rings</CardButtonText>
            </Link>
            </CardButton>
            </FeatureCardContent>
            </Feature>
            
            <Feature>
            <FeatureCardContent>
            <FeatureCardTitle>Magnetic Warm-Glow Book Lamp</FeatureCardTitle>
            <FeatureCardProductPrice>$34.95USD</FeatureCardProductPrice>
            <CardButton>
            <Link to="/starsigned-lights-home" style={{textDecoration: "none"}}>
              <CardButtonText>Shop Lights&Home</CardButtonText>
              </Link>
            </CardButton>
          </FeatureCardContent>
          <Feat4Image />
        </Feature>
      </Grid>
    </RootContainer>
  );
};

export default Featured;
