import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderPhone from '../img/BadFaithHeaderPhone.png';

const HeaderContainer = styled.div`
  padding-top: 7.5vh;
  display: flex;
  justify-content: center;
  height: 70vh;
  width: 100%;
  background-color: #222;
`;

// 422 * 749
const PhoneImageWrapper = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 39.44vh;
  height: 70vh;
  //   background-color: red;
  justify-content: center;
`;

const BadFaithLogoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-self: center;
  z-index: 1;
  width: 39.44vh;
  height: 65vh;
  bottom: 5vh;
`;

const BadFaithLogo = styled.h1`
  position: absolute;
  align-self: center;
  color: black;
  z-index: 1;
 bottom: 5vh;
`;

const BadFaithLogoTagline = styled.h2`
position: absolute;
align-self: center;
color: black;
z-index: 1;
bottom: 0;
`

const PhoneImage = styled.img`
  position: absolute;
  transform: translate3d(0, 15vh, 0);
  width: 39.44vh;
  height: 70vh;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <PhoneImageWrapper>
        <BadFaithLogoContainer>
          <BadFaithLogo>BadFaith</BadFaithLogo>
          <BadFaithLogoTagline>Not just a case.</BadFaithLogoTagline>
        </BadFaithLogoContainer>
        <PhoneImage src={HeaderPhone} />
      </PhoneImageWrapper>
    </HeaderContainer>
  );
};

export default Header;
