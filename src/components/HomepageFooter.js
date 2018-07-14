import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import PaymentOptionIcons from '../img/PaymentOptions.png';

const RootContainer = styled.div`
  height: auto;
  width: 100%;
  background-color: #111;
  text-align: center;
  padding-top: 4vw;
`;
const RootGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50vw);
  align-items: center;
  width: 100%;
`;

const GridItem = styled.div`
  // background-color: #eee;
  height: auto;
  width: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const GridItem2 = styled.div`
  // background-color: #eee;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const TitleWrapper = styled.div`
  // background-color: blue;
  border-bottom: 1px solid #333;
  width: 75%;
  margin: 0 12.5%;
  margin-top: 1vw;
  height: auto;
`;

const Title = styled.h1`
  font-size: 4vw;
  color: #999;
  font-family: 'Roboto Condensed', cursive;
`;
const SubTitle = styled.h1`
  height: 4vw;
  font-size: 3.5vw;
  color: #888;
  margin: 4% 5%;
  font-family: 'Roboto Condensed', cursive;
`;

const StarSignedCopyRight = styled.h1`
  font-size: 3.5vw;
  color: #555;
  padding: 4% 5%;
  font-family: 'Roboto Condensed', cursive;
`;

// ============================================================
// Payment Options
// ============================================================

const PaymentOptionsSection = styled.div`
  width: 100%;
  height: 10vw;
  // background-color: red;
  padding-bottom: 5vw;
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
      <Fade bottom>
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
            <SubTitle> </SubTitle>
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
      </Fade>
    </RootContainer>
  );
};

export default Footer;
