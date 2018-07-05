import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PaymentOptionIcons from '../../img/PaymentOptions.png';

const RootContainer = styled.div`
  height: auto;
  width: 75%;
  margin: 0 12.5%;
  background-color: white;
  text-align: center;
  margin-top: 1vw;
  padding-top: 4vw;
`;
const RootGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 37.5vw);
  align-items: center;
  width: 75%;
`;

const GridItem = styled.div`
  background-color: white;
  height: auto;
  width: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const GridItem2 = styled.div`
  background-color: white;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const TitleWrapper = styled.div`
  background-color: blue;
  border-bottom: 1px solid #333;
  width: 75%;
  margin: 0 12.5%;
  margin-top: 1vw;
  height: auto;
`;

const Title = styled.h1`
  font-size: 0.9vw;
  color: #111;
  font-family: 'Roboto Condensed', cursive;
`;
const SubTitle = styled.h1`
  font-size: 0.8vw;
  color: #555;
  margin: 2% 5%;
  font-family: 'Roboto Condensed', cursive;
`;

const StarSignedCopyRight = styled.h1`
  font-size: 0.8vw;
  color: #555;
  padding: 1% 5%;
  font-family: 'Roboto Condensed', cursive;
`;

// ============================================================
// Payment Options
// ============================================================

const PaymentOptionsSection = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  height: 10vw;
  margin: 0 12.5%;
  // background-color: red;
`;

const PaymentOptionsWrapper = styled.div`
  width: 20vw;
  margin: 0 10vw;
  height: 2.57vw;
  background-image: url(${PaymentOptionIcons});
  background-size: contain;
`;

const DesktopFooter = () => {
  return (
    <RootContainer>
      <RootGrid>
        <GridItem>
          <Title>Need Help?</Title>
          <TitleWrapper />
          <Link to="/support-center">
            <SubTitle>Support Center</SubTitle>
          </Link>
          <Link to="/contact-us">
            <SubTitle>Contact Us</SubTitle>
          </Link>
          <SubTitle>About Us</SubTitle>
        </GridItem>
        <GridItem2>
          <Title>Explore</Title>
          <TitleWrapper />
          <Link to="/privacy-policy">
            <SubTitle>Privacy Policy</SubTitle>
          </Link>
          <Link to="/refund-policy">
            <SubTitle>Returns/Refunds Policy</SubTitle>
          </Link>
          <Link to="/terms-of-use">
            <SubTitle>Terms of Use</SubTitle>
          </Link>
        </GridItem2>
      </RootGrid>
      <StarSignedCopyRight>© StarSigned 2018 ☾</StarSignedCopyRight>
      <PaymentOptionsSection>
        <PaymentOptionsWrapper />
      </PaymentOptionsSection>
    </RootContainer>
  );
};

export default DesktopFooter;
