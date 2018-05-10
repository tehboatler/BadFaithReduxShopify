import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Feature1Img from '../../img/Feat1.jpg';
import Feature2Img from '../../img/Feat2.jpg';
import Feature3Img from '../../img/Feat3.jpg';
import Feature4Img from '../../img/Feat4.jpg';
import Feature5Img from '../../img/Feat5.jpg';
import Feature6Img from '../../img/Feat6.jpg';

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
  grid-template-rows: 10vw 10vw;
  grid-template-columns: 49.95vw 49.95vw;
  grid-gap: 0.1vw;
  grid-template-areas:
    'feat1 feat1'
    'feat2 feat3';
  @media (max-width: 415px) {
    grid-template-rows: 107.34vw 61.11vw;
    width: 100%;
    margin-top: 0vw;
  }
`;
const Grid2 = styled.div`
  margin-top: 0.1vw;
  display: grid;
  width: 100%;
  grid-template-rows: 10vw 10vw;
  grid-template-columns: 34.95vw 64.95vw;
  grid-gap: 0.1vw;
  grid-template-areas:
    'feat5 feat4 feat4'
    'feat6 feat4 feat4';
  @media (max-width: 415px) {
    grid-template-rows: 36.56vw 36.56vw;
    width: 100%;
    margin-top: 0.2vw;
  }
`;

const Feature1 = styled.div`
position: relative;
  grid-area: feat1;
  height: 100%;
  width: 100%;
  background-color: #eee;
`;

const Feature1Sub = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  width: 100%;
  background-color: black;
  opacity: 0.8;
`

const FeatureSubTitle = styled.h1`
font-family: 'Bungee', cursive;
color: white;
font-size: 4vw;
margin: 2.5vw;
`

const Feature2 = styled.div`
position: relative;
  height: 100%;
  width: 100%;
  grid-area: feat2;
  background-color: #eee;
`;
const Feature3 = styled.div`
position: relative;
  height: 100%;
  width: 100%;
  grid-area: feat3;
  background-color: #eee;
`;
const Feature4 = styled.div`
position: relative;
  height: 100%;
  width: 100%;
  grid-area: feat4;
  background-color: #eee;
`;
const Feature5 = styled.div`
position: relative;
  height: 100%;
  width: 100%;
  grid-area: feat5;
  background-color: #eee;
`;
const Feature6 = styled.div`
position: relative;
  height: 100%;
  width: 100%;
  grid-area: feat6;
  background-color: #eee;
`;

const Feat1Img = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Feature1Img});
  background-repeat: no-repeat;
  background-size: contain;
`;
const Feat2Img = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Feature2Img});
  background-repeat: no-repeat;
  background-size: contain;
`;
const Feat3Img = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Feature3Img});
  background-repeat: no-repeat;
  background-size: contain;
`;
const Feat4Img = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Feature4Img});
  background-repeat: no-repeat;
  background-size: contain;
`;
const Feat5Img = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Feature5Img});
  background-repeat: no-repeat;
  background-size: contain;
`;
const Feat6Img = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Feature6Img});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Featured = () => {
  return (
    <RootContainer>
      <Grid>
        <Link style={{ gridArea: 'feat1' }} to="/simple-stars">
          <Feature1>
          <Feature1Sub>
            <FeatureSubTitle>StarBound Cases</FeatureSubTitle>
          </Feature1Sub>
            <Feat1Img />
          </Feature1>
        </Link>
        <Link style={{ gridArea: 'feat2' }} to="/starsigned-necklaces">
          <Feature2>
          <Feature1Sub>
          <FeatureSubTitle>Necklaces</FeatureSubTitle>
        </Feature1Sub>
            <Feat2Img />
          </Feature2>
        </Link>
        <Link style={{ gridArea: 'feat3' }} to="/starsigned-bracelets">
        <Feature3>
        <Feature1Sub>
        <FeatureSubTitle>Bracelets</FeatureSubTitle>
      </Feature1Sub>
          <Feat3Img />
        </Feature3>
        </Link>
      </Grid>
      <Grid2>
      <Link style={{ gridArea: 'feat5' }} to="/starsigned-rings">
        <Feature5>
        <Feature1Sub>
        <FeatureSubTitle>Rings</FeatureSubTitle>
      </Feature1Sub>
          <Feat5Img />
        </Feature5>
        </Link>
        <Link style={{ gridArea: 'feat4' }} to="/starsigned">
          <Feature4>
          <Feature1Sub>
          <FeatureSubTitle>Lights & Home Decor</FeatureSubTitle>
        </Feature1Sub>
            <Feat4Img />
          </Feature4>
        </Link>
        <Feature6>
        <Feature1Sub>
        <FeatureSubTitle>Pins </FeatureSubTitle>
      </Feature1Sub>
          <Feat6Img />
        </Feature6>
      </Grid2>
    </RootContainer>
  );
};

export default Featured;
