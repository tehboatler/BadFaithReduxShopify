import React, { Component } from 'react';
import styled from 'styled-components';
import ItemPhone from '../img/BadFaithHeaderPhone.png';
import { Link } from 'react-router-dom';

const CaseItemContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0.5vw 0;
  background-color: #EEE;
  -webkit-box-shadow: 0px 4px 30px -9px rgba(54,54,54,0.44);
-moz-box-shadow: 0px 4px 30px -9px rgba(54,54,54,0.44);
box-shadow: 0px 4px 30px -9px rgba(54,54,54,0.44);
`;

const CaseTitle = styled.h1`
  color: #111;
  margin: 1vw;
  font-size: 2vw;
  font-family: 'Permanent Marker', cursive;

  @media (max-width: 415px) {
    font-size: 5vw;
  }
`;

const CaseDesc = styled.h3`
  color: white;
  margin: 0;
`;

const Grid = styled.div`
  height: auto;
  width: 99%;
`;

const CaseImageWrapper = styled.div`
  position: relative;
  // background-color: #222;
  height: 13.25vw;
  width: 13.25vw;

  @media (max-width: 415px) {
    height: 47vw;
    width: 47vw;
  }
`;

const CaseImage = styled.img`
  // position: absolute;
  mix-blend-mode: multiply;
  height: 100%;
  width: 100%;
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  height: 7.5vw;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  // padding: 1vw 1vw 0vh 1vw;
  @media (max-width: 415px) {
    width: 47vw;
    height: 7.5vw;
  }
`;

const GoToCaseButton = styled.div`
  background-color: red;
  margin: 1vw;
  height: 2vw;
  width: 5vw;
  border-radius: 0.5vh;

  @media (max-width: 415px) {
    height: 0;
    width: 0;
  }
`;

const CaseItem = ({ title, desc, id, image }) => {
  return (
    <CaseItemContainer>
      <Grid>
      <CaseImageWrapper>
      <Link to={`/starsigned/${title}`}>
            <CaseImage src={image.src} />
            </Link>
            <DescriptionWrapper>
              <CaseTitle>{title}</CaseTitle>
              <Link to={`/starsigned/${title}`}>
                
              </Link>
            </DescriptionWrapper>
          </CaseImageWrapper>
      </Grid>
    </CaseItemContainer>
  );
};

export default CaseItem;
