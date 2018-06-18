import React, { Component } from 'react';
import styled from 'styled-components';

import IntroBannerRing from '../img/IntroBannerRing.png';

const RootContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 110vw;
  width: 100vw;
  text-align: center;

  background: rgba(255, 202, 110, 1);
  background: -moz-linear-gradient(
    top,
    rgba(255, 202, 110, 1) 0%,
    rgba(242, 201, 76, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(255, 202, 110, 1)),
    color-stop(100%, rgba(242, 201, 76, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 202, 110, 1) 0%,
    rgba(242, 201, 76, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 202, 110, 1) 0%,
    rgba(242, 201, 76, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 202, 110, 1) 0%,
    rgba(242, 201, 76, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 202, 110, 1) 0%,
    rgba(242, 201, 76, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffca6e', endColorstr='#f2c94c', GradientType=0 );
`;

const IntroBannerRingContainer = styled.div`
  position: absolute;
  display: flex;
  background-image: url(${IntroBannerRing});
  background-size: cover;
  mix-blend-mode: multiply;
  opacity: 0.1;
  top: 12vw;
  width: 59.8vw;
  height: 59.8vw;
`;

const IntroBannerRingContainerColorBurnOverlay = styled.div`
  position: absolute;
  display: flex;
  background-image: url(${IntroBannerRing});
  background-size: cover;
  mix-blend-mode: color-burn;
  opacity: 0.3;
  top: 12vw;
  width: 60vw;
  height: 60vw;
`;

const BannerTitle = styled.h1`
  position: absolute;
  font-family: 'Permanent Marker', cursive;
  font-size: 10vw;
  padding: 0 5vw;
  text-shadow: 0px 4px 4px rgba(225, 164, 58, 1);
  top: 40vw;
  color: white;
  z-index: 1;
`;

const LinkText = styled.h1`
  font-family: 'Roboto Condensed', cursive;
  font-size: 6vw;
  font-weight: 700;
  border-radius: 1vw;
  position: absolute;
  top: 80vw;
  background-color: white;
  color: #000;
  padding: 2% 2%;
`;

export default class IntroBanner extends Component {
  render() {
    return (
      <RootContainer>
        <BannerTitle>35% off on Gemini Merch store-wide!</BannerTitle>
        <IntroBannerRingContainerColorBurnOverlay />
        <IntroBannerRingContainer />
        <LinkText>Checkout w/ GEMINI35</LinkText>
      </RootContainer>
    );
  }
}
