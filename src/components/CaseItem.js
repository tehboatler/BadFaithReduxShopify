import React, { Component } from 'react';
import styled from 'styled-components';
import ItemPhone from '../img/BadFaithHeaderPhone.png';
import { Link } from 'react-router-dom';

const CaseItemContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #222;
`;

const CaseTitle = styled.h1`
  color: white;
  margin-bottom: 5vh;
  font-size: 6rem;
  font-family: 'Permanent Marker', cursive;
`;

const CaseDesc = styled.h3`
  color: white;
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  // grid-template-columns: 6fr 10fr;
  grid-template-columns: 6fr minmax(150px, 10fr);
  height: auto;
  width: 100%;
`;

const CaseImageWrapper = styled.div`
  position: relative;
  justify-self: center;
  align-self: center;
  background-color: #222;
  height: 35.5vw;
  width: 20vw;
`;

const CaseImage = styled.img`
  height: 100%;
  width: 100%;
`;

const DescriptionWrapper = styled.div`
  background-color: #333;
  padding: 5vh 5vh 0vh 5vh;
`;

const GoToCaseButton = styled.div`
  background-color: red;
  margin: 5vh;
  height: 5vh;
  width: 15vh;
  border-radius: 0.5vh;
`;

const CaseItem = ({ title, desc, id }) => {
  return (
    <CaseItemContainer>
      <Grid>
        <CaseImageWrapper>
          <CaseImage src={ItemPhone} />
        </CaseImageWrapper>
        <DescriptionWrapper>
          <CaseTitle>{title}</CaseTitle>
          <CaseDesc>{desc}</CaseDesc>
          <Link to={`/starsigned/${title}`}><GoToCaseButton/></Link>
        </DescriptionWrapper>
      </Grid>
    </CaseItemContainer>
  );
};

export default CaseItem;
