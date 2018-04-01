import React, { Component } from 'react';
import styled from 'styled-components';

// ============================================================
// S†arsigned Featured Section
// ============================================================
const FeaturedSection = styled.div`
  display: flex;
  height: ${({ isHome }) => (isHome ? '60vh' : '0vh')};
  width: 100%;
  background-color: #eee;
`;

const IntroducingStarSigned = styled.div`
  align-self: center;
  text-align: center;
  height: ${({ isHome }) => (isHome ? 'auto' : '0vh')};
  width: 100%;
  overflow: hidden;
`;

const StarSigned = styled.h1`
  font-family: 'Permanent Marker', cursive;
  font-size: 6vw;
  color: black;
  line-height: 0;
  @media (max-width: 415px) {
      font-size: 10vw;
      line-height: 1;
    }
    `;
    
    const Introducing = styled.h1`
    font-family: 'Bungee', cursive;
    font-size: 3vw;
    color: black;
    line-height: 0;
    @media (max-width: 415px) {
        line-height: 1;
    font-size: 4vw;
  }
`;

const RangeDescription = styled.h1`
font-family: 'Patua One', cursive;
font-size: 1vw;
color: darkgrey;
margin: 0 15vw;
@media (max-width: 415px) {
    font-size: 4vw;
  }
`

const StarSignedFeatured = () => {
  return (
    <FeaturedSection isHome={location.pathname === '/'}>
      <IntroducingStarSigned isHome={location.pathname === '/'}>
        <Introducing>Introducing</Introducing>
        <StarSigned>StarSigned</StarSigned>
        <RangeDescription>At Cigarettes&BadFaith we're dedicated to creating cases that speak to who you are. <br/><br/> StarSigned is a series of subtle shoutouts to your star sign. <br/><br/>We hope you like them!</RangeDescription>
      </IntroducingStarSigned>
    </FeaturedSection>
  );
};

export default StarSignedFeatured;
