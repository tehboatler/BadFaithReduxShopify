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
  grid-template-columns: 65% 1fr 30%;
  grid-gap: 1vw;
  grid-template-areas:
    'feat1 feat1 feat2'
    'feat1 feat1 feat3';
  @media (max-width: 415px) {
    grid-template-rows: 36.56vw 36.56vw;
    width: 100%;
    margin-top: 0vw;
  }
`;
const Grid2 = styled.div`
  margin-top: 1vw;
  display: grid;
  width: 100%;
  grid-template-rows: 10vw 10vw;
  grid-template-columns: 30% 1fr 65%;
  grid-gap: 1vw;
  grid-template-areas:
    'feat5 feat4 feat4'
    'feat6 feat4 feat4';
  @media (max-width: 415px) {
    grid-template-rows: 36.56vw 36.56vw;
    width: 100%;
    margin-top: 1vw;
  }
`;

const Feature1 = styled.div`
  grid-area: feat1;
  height: 100%;
  width: 100%;
  background-color: #eee;
`;

const Feature2 = styled.div`
  height: 100%;
  width: 100%;
  grid-area: feat2;
  background-color: #eee;
`;
const Feature3 = styled.div`
  height: 100%;
  width: 100%;
  grid-area: feat3;
  background-color: #eee;
`;
const Feature4 = styled.div`
  height: 100%;
  width: 100%;
  grid-area: feat4;
  background-color: #eee;
`;
const Feature5 = styled.div`
  height: 100%;
  width: 100%;
  grid-area: feat5;
  background-color: #eee;
`;
const Feature6 = styled.div`
  height: 100%;
  width: 100%;
  grid-area: feat6;
  background-color: #eee;
`;

const Feat1Img = styled.img`
  height: 100%;
  width: 100%;
  background-image: url(${Feature1Img});
  background-repeat: no-repeat;
  background-size: contain;
`;
const Feat2Img = styled.img`
  height: 100%;
  width: 100%;
  background-image: url(${Feature2Img});
  background-repeat: no-repeat;
  background-size: contain;
`;
const Feat3Img = styled.img`
  height: 100%;
  width: 100%;
  background-image: url(${Feature3Img});
  background-repeat: no-repeat;
  background-size: contain;
`;
const Feat4Img = styled.img`
  height: 100%;
  width: 100%;
  background-image: url(${Feature4Img});
  background-repeat: no-repeat;
  background-size: contain;
`;
const Feat5Img = styled.img`
  height: 100%;
  width: 100%;
  background-image: url(${Feature5Img});
  background-repeat: no-repeat;
  background-size: contain;
`;
const Feat6Img = styled.img`
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
        <Link style={{ gridArea: 'feat1' }} to="/starsigned">
          <Feature1>
            <Feat1Img />
          </Feature1>
        </Link>
        <Link style={{ gridArea: 'feat2' }} to="/starsigned-necklaces">
          <Feature2>
            <Feat2Img />
          </Feature2>
        </Link>
        <Feature3>
          <Feat3Img />
        </Feature3>
      </Grid>
      <Grid2>
        <Feature5>
          <Feat5Img />
        </Feature5>
        <Link style={{ gridArea: 'feat4' }} to="/starsigned">
          <Feature4>
            <Feat4Img />
          </Feature4>
        </Link>
        <Feature6>
          <Feat6Img />
        </Feature6>
      </Grid2>
    </RootContainer>
  );
};

export default Featured;
