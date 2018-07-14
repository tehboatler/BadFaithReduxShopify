import React, { Component } from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';




const RootContainer = styled.div`
  padding-top: 8vw;
  width: 75%;
  margin: 0 12.5%;
  height: auto;
  background-color: white;
  text-align: center;
  z-index: 2;
`;

// Promo Banner
// ============================================================
const PromoBanner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  height: 3vw;
  margin-left: -5%;
  padding-right: 5%;
  width: 20%;
  padding-left: 85%;
  justify-content: center;

  margin-bottom: 1vw;
//   -webkit-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
//   -moz-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
//   box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
  //   background: rgba(255, 202, 110, 1);
  //   background: -moz-linear-gradient(
  //     top,
  //     rgba(255, 202, 110, 1) 0%,
  //     rgba(242, 201, 76, 1) 100%
  //   );
  //   background: -webkit-gradient(
  //     left top,
  //     left bottom,
  //     color-stop(0%, rgba(255, 202, 110, 1)),
  //     color-stop(100%, rgba(242, 201, 76, 1))
  //   );
  //   background: -webkit-linear-gradient(
  //     top,
  //     rgba(255, 202, 110, 1) 0%,
  //     rgba(242, 201, 76, 1) 100%
  //   );
  //   background: -o-linear-gradient(
  //     top,
  //     rgba(255, 202, 110, 1) 0%,
  //     rgba(242, 201, 76, 1) 100%
  //   );
  //   background: -ms-linear-gradient(
  //     top,
  //     rgba(255, 202, 110, 1) 0%,
  //     rgba(242, 201, 76, 1) 100%
  //   );
  //   background: linear-gradient(
  //     to bottom,
  //     rgba(255, 202, 110, 1) 0%,
  //     rgba(242, 201, 76, 1) 100%
  //   );
  //   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffca6e', endColorstr='#f2c94c', GradientType=0 );
  background-color: #fff;
`;

const PromoBannerText = styled.h1`
  font-family: 'Archivo Black', Arial;
  align-self: right;
  font-size: 0.7vw;
  color: black;
`;

// ============================================================
// Best Selling Section
// ============================================================

const VignetteOverlay = styled.div`
  position: fixed;
  height: 15vw;
  width: 100vw;
  opacity: 0.5;
  bottom: 0;
  mix-blend-mode: multiply;
  margin-left: -16.5%;
  padding-right: 33%;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 237, 237, 1) 25%,
    rgba(204, 204, 204, 1) 48%,
    rgba(140, 140, 140, 1) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(25%, rgba(237, 237, 237, 1)),
    color-stop(48%, rgba(204, 204, 204, 1)),
    color-stop(73%, rgba(140, 140, 140, 1)),
    color-stop(100%, rgba(0, 0, 0, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 237, 237, 1) 25%,
    rgba(204, 204, 204, 1) 48%,
    rgba(140, 140, 140, 1) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 237, 237, 1) 25%,
    rgba(204, 204, 204, 1) 48%,
    rgba(140, 140, 140, 1) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 237, 237, 1) 25%,
    rgba(204, 204, 204, 1) 48%,
    rgba(140, 140, 140, 1) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 237, 237, 1) 25%,
    rgba(204, 204, 204, 1) 48%,
    rgba(140, 140, 140, 1) 73%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#000000', GradientType=0 );
`;

const HeaderMedium = styled.h1`
  font-family: 'Archivo Black', Courier, monospace;
  font-size: 4vw;
  margin-top: 4vw;
  line-height: 0;
  background-color: black;
  color: black;
  font-weight: 700vw;
`;

export default class DesktopFeatured extends Component {
  state = {
    showFeatured: false
  };

  ToggleFeature = () => {
    console.log('Firing!');
    this.setState({ showFeatured: !this.state.showFeatured });
  };

  render() {
    const { showFeatured } = this.state;

    return (
      <RootContainer>
        <Spring
          from={{ opacity: 0, height: '0vw' }}
          to={{ opacity: 1, height: '3vw' }}>
          {styles => (
            <PromoBanner style={styles}>
              <PromoBannerText>
                25% off on Gemini Items storewide! COUPON CODE: GEMINI25
              </PromoBannerText>
            </PromoBanner>
          )}
        </Spring>

        <Fade>
        <FeaturedGrid />
      </Fade>

        <VignetteOverlay />
        
      </RootContainer>
    );
  }
}
