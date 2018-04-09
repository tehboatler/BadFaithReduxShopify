import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CaseItemContainer = styled.div`
  width: 100%;
  height: auto;
  justify-self: center;
  margin: 0.5vw 0;
//   background-color: #eee;
  -webkit-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
  -moz-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
  box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
`;

const CaseTitle = styled.h1`
  color: #111;
  margin: 1vw;
  font-size: 2vw;
  font-family: 'Permanent Marker', cursive;

  @media (max-width: 415px) {
    font-size: 4vw;
    color: #444;
  }
`;

const CaseDesc = styled.h3`
  color: white;
  margin: 0;
`;

const CaseImageWrapper = styled.div`
  // background-color: #222;
  height: 13.25vw;
  width: 13.25vw;

  @media (max-width: 415px) {
    height: 95vw;
    width: 95vw;
  }
`;

const CaseImage = styled.img`
  // position: absolute;
  mix-blend-mode: multiply;
  height: 100%;
  width: 100%;
`;

const DescriptionWrapper = styled.div`
  height: 7.5vw;
  width: 100%;
  background-color: #fff;
  // padding: 1vw 1vw 0vh 1vw;
  @media (max-width: 415px) {
    width: 90vw;
    height: 15vw;
  }
`;

const NecklaceItem = ({ title, desc, id, image, pathString }) => {
  return (
    <CaseItemContainer>
      <CaseImageWrapper>
        <Link to={`/${pathString}/${title}`}>
          <CaseImage src={image} />
        </Link>
        </CaseImageWrapper>
        <DescriptionWrapper>
          <CaseTitle>{title}</CaseTitle>
          <Link to={`/${pathString}/${title}`} />
        </DescriptionWrapper>
    </CaseItemContainer>
  );
};

export default NecklaceItem;
