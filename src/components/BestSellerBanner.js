import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NewReleasesNecklace from '../img/SterlingSilverNewReleasesNecklace.jpg';

const NewReleasesWrapper = styled.div`
  position: relative;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  background-color: #f2f2f2;
  height: 102vw;
  text-align: center;
`;

const NewReleasesCard = styled.div`
  position: absolute;
  background-color: #f2f2f2;
  top: -3vw;
  height: 105vw;
  width: 100vw;
  // /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffd34d+0,f7bb53+100 */
  // background: rgb(255, 211, 77); /* Old browsers */
  // background: -moz-linear-gradient(
  //   top,
  //   rgba(255, 211, 77, 1) 0%,
  //   rgba(247, 187, 83, 1) 100%
  // ); /* FF3.6-15 */
  // background: -webkit-linear-gradient(
  //   top,
  //   rgba(255, 211, 77, 1) 0%,
  //   rgba(247, 187, 83, 1) 100%
  // ); /* Chrome10-25,Safari5.1-6 */
  // background: linear-gradient(
  //   to bottom,
  //   rgba(255, 211, 77, 1) 0%,
  //   rgba(247, 187, 83, 1) 100%
  // ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffd34d', endColorstr='#f7bb53',GradientType=0 ); /* IE6-9 */
  -webkit-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
`;

const NewReleasesBraceletImage = styled.div`
  position: absolute;
  top: -3vw;
  background-image: url(${NewReleasesNecklace});
  height: 105vw;
  width: 100vw;
  opacity: 0.9;
  background-size: cover;
  z-index: 1;
  mix-blend-mode: multiply;
`;

const NewReleasesTitle = styled.h1`
  position: absolute;
  top: 25vw;
  z-index: 2;
  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;
  font-size: 9vw;
  color: #f2f2f2;
  // background-color: white;
  // border: 5px black solid;
  text-shadow: 1px 3px 0px rgba(0, 0, 0, 0.2);
  -moz-text-stroke-color: #999;
  -webkit-text-stroke-color: #999;
  -moz-text-stroke-width: 2px;
  -webkit-text-stroke-width: 2px;
`;

const NewReleasesFeatureButton = styled.div`
  position: absolute;
  border-radius: 1px;
  top: 75vw;
  z-index: 2;
`;

const NewReleasesFeatureButtonText = styled.h1`
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-size: 4vw;
  color: #131313;
  padding: 3vw 10vw;
  background-color: white;
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
`;

const BestSellingBanner = () => {
  return (
    <NewReleasesWrapper>
      <NewReleasesCard />
      <NewReleasesBraceletImage />
      <NewReleasesTitle>Shop Best-Selling</NewReleasesTitle>
      <NewReleasesFeatureButton>
        <Link to="/starsigned-best-selling">
          <NewReleasesFeatureButtonText>Shop Now</NewReleasesFeatureButtonText>
        </Link>
      </NewReleasesFeatureButton>
    </NewReleasesWrapper>
  );
};

export default BestSellingBanner;
