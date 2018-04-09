import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import reactDOM from 'react-dom';

import Lined from '../img/lined-paper-2.png';
import HeaderFeature from '../img/NecklacesHeader.png';
import MobileHeroFeature from '../img/NecklacesHeaderMobile.jpg';

const HeaderContainer = styled.div`
  padding-top: 5vw;
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  background-color: #f2f2f2;
  // background: rgb(0,0,0); /* Old browsers */
  // background: -moz-linear-gradient(top, rgba(0,0,0,1) 14%, rgba(34,34,34,1) 100%); /* FF3.6-15 */
  // background: -webkit-linear-gradient(top, rgba(0,0,0,1) 14%,rgba(34,34,34,1) 100%); /* Chrome10-25,Safari5.1-6 */
  // background: linear-gradient(to bottom, rgba(0,0,0,1) 14%,rgba(34,34,34,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

  background-image: url(${Lined});
  overflow: hidden;
  @media (max-width: 415px) {
    padding-top: 22.5vw;
    background-color: #000;
  }
`;

// 541 × 1085
const PhoneImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 22.61vw;
  justify-content: center;
  @media (max-width: 415px) {
    height: 107.34vw;
  }
`;

//960x334
const HeaderIcon = styled.div`
  background-color: black;
  opacity: 0.95;
  position: absolute;
  top: 0vh;
  width: 65vw;
  height: 22.61vw;
  @media (max-width: 415px) {
    width: 100vw;
    height: 107.34vw;
  }
  `;
  
  const HeaderIconImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${HeaderFeature});
  background-size: contain;
  @media (max-width: 415px) {
    background-image: url(${MobileHeroFeature});
    background-size: contain;
  }
`;

const HeaderGreenNecklace = styled.div`

  
`

const BadFaithLogoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-self: center;
  z-index: 1;
  width: 39.44vh;
  height: 65vh;
  bottom: 10vh;
  text-align: center;
`;

const BadFaithLogo = styled.h1`
  font-family: 'Permanent Marker', cursive;
  font-size: 5vw;
  margin-bottom: 2vw;
  position: absolute;
  align-self: center;
  color: #eee;
  z-index: 1;
  bottom: 5vh;
  @media (max-width: 415px) {
    font-size: 15vw;
    margin-bottom: 6vw;
  }
`;

const CigarettesLogo = styled.h1`
  font-family: 'Bungee', cursive;
  font-size: 3vw;
  margin-bottom: 2vw;
  position: absolute;
  align-self: center;
  color: #eee;
  z-index: 1;
  bottom: 15vh;
  @media (max-width: 415px) {
    bottom: 13vh;
    font-size: 10vw;
    margin-bottom: 3vw;
  }
`;

const BadFaithLogoTagline = styled.h2`
  font-family: 'Patua One', cursive;
  font-size: 2vw;
  position: absolute;
  align-self: center;
  color: #eee;
  z-index: 1;
  bottom: 0vw;

  @media (max-width: 415px) {
    font-size: 5vw;
  }
`;

const PhoneImage = styled.img`
  position: absolute;
  opacity: 0.8;
  transform: translate3d(0, 15vh, 0);
  width: 39.44vh;
  height: 70vh;
`;

export class Header extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   if (location.pathname !== prevProps.location.pathname) {
  //     if (location.pathname === '/') {
  //       // this.header.animate([{ height: '0vh' }, { height: '70vh' }], {
  //       //   duration: 300,
  //       //   fill: 'forwards',
  //       //   easing: 'cubic-bezier(0.86, 0, 0.07, 1)'
  //       // });
  //     } else {
  //       if (prevProps.location.pathname === '/') {
  //         // this.header.animate([{ height: '70vh' }, { height: '0vh' }], {
  //         //   duration: 300,
  //         //   fill: 'forwards',
  //         //   easing: 'cubic-bezier(0.86, 0, 0.07, 1)'
  //         // });
  //       }
  //     }
  //   }
  // }

  render() {
    return (
      <HeaderContainer
        isHome={location.pathname === '/'}
        ref={c => (this.header = reactDOM.findDOMNode(c))}
      >
        <PhoneImageWrapper>
          
            <HeaderIcon>
              <HeaderIconImage/>
            </HeaderIcon>
        
        </PhoneImageWrapper>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
