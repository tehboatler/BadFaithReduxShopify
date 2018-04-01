import React, { Component } from 'react';
import styled from 'styled-components';

// ============================================================
// S†arsigned Featured Section
// ============================================================
const FeaturedSection = styled.div`
  display: flex;
  height: ${({ isHome }) => (isHome ? '40vh' : '0vh')};
  width: 100%;
  background-color: #eee;
`;

const IntroducingStarSigned = styled.div`
  align-self: center;
  text-align: center;
  width: 100%;
`;

const StarSigned = styled.h1`
  font-family: 'Permanent Marker', cursive;
  font-size: 7vw;
  color: black;
  @media (max-width: 415px) {
    font-size: 10vw;
  }
`;

const Introducing = styled.h1`
  font-family: 'Bungee', cursive;
  font-size: 4vw;
  color: black;
`;

const RangeDescription = styled.h1`
font-family: 'Bungee', cursive;
font-size: 4vw;
color: grey;
margin: 0 15vw;
`

const StarSignedFeatured = () => {
  return (
    <FeaturedSection isHome={location.pathname === '/'}>
      <IntroducingStarSigned>
        <Introducing>Introducing</Introducing>
        <StarSigned>StarSigned</StarSigned>
        <RangeDescription>At Cigarettes&BadFaith™ we're dedicated to creating cases that speak to who you are. <br/> StarSigned™ is a series of subtle shoutouts to your star sign. <br/>We hope you like them!</RangeDescription>
      </IntroducingStarSigned>
    </FeaturedSection>
  );
};

export default StarSignedFeatured;
