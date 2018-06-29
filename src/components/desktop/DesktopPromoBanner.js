import React, { Component } from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';

// Promo Banner
// ============================================================
const PromoBanner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  max-height: 3vw;
  margin-left: -5%;
  padding-right: 5%;
  width: 20%;
  padding-left: 85%;
  justify-content: center;

  margin-bottom: 1vw;
  -webkit-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
  -moz-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
  box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
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
  background-color: #f5f5f5;
`;

const PromoBannerText = styled.h1`
  font-family: 'Archivo Black', Arial;
  align-self: right;
  font-size: 0.7vw;
  color: black;
`;

export default class DesktopPromoBanner extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, height: '0vw' }}
        to={{ opacity: 1, height: '10vw' }}>
        {styles => (
          <PromoBanner style={styles}>
            <PromoBannerText>
              25% off on Gemini Items storewide! COUPON CODE: GEMINI25
            </PromoBannerText>
          </PromoBanner>
        )}
      </Spring>
    );
  }
}
