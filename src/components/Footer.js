import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


import PaymentOptionIcons from '../img/PaymentOptions.png';

const RootContainer = styled.div`
  height: auto;
  width: 100%;
`;
const RootGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const GridItem = styled.div`
  background-color: #eee;
  height: auto;
  justify-content: center;
`;
const GridItem2 = styled.div`
  background-color: #eee;
  height: auto;
  justify-content: center;
`;
const TitleWrapper = styled.div`
  // background-color: blue;
  border-bottom: 1px solid #333;
  width: 90%;
  margin: 0 5%;
  margin-top: 5vw;
  height: auto;
`;

const Title = styled.h1`
  font-size: 4vw;
  color: #111;
  font-family: 'Bungee', cursive;
`;
const SubTitle = styled.h1`
  font-size: 3vw;
  color: #555;
  margin: 4% 5%;
  font-family: 'Bungee', cursive;
`;

// ============================================================
// Payment Options
// ============================================================

const PaymentOptionsSection = styled.div`
  width: 100%;
  height: 10vw;
  // background-color: red;
`;

const PaymentOptionsWrapper = styled.div`
  width: 80vw;
  margin: 0 10vw;
  height: 10.27vw;
  background-image: url(${PaymentOptionIcons});
  background-size: contain;
`;

const Footer = () => {
  return (
    <RootContainer>
      <RootGrid>
        <GridItem>
          <TitleWrapper>
            <Title>Need Help?</Title>
          </TitleWrapper>
          <Link style={{ gridArea: 'feat1' }} to="/simple-stars">
          <SubTitle>Support Center</SubTitle>
          </Link>
          <SubTitle>Contact Us</SubTitle>
          <SubTitle>About Us</SubTitle>
          <TitleWrapper>
            <Title>Explore</Title>
          </TitleWrapper>
          <SubTitle>Privacy Policy</SubTitle>
          <SubTitle>Returns Policy</SubTitle>
          <SubTitle>Terms of Use</SubTitle>
        </GridItem>
        <GridItem2>
          <SubTitle>© StarSigned 2018 ☾</SubTitle>
          <PaymentOptionsSection>
            <PaymentOptionsWrapper />
          </PaymentOptionsSection>
        </GridItem2>
      </RootGrid>
    </RootContainer>
  );
};

export default Footer;
