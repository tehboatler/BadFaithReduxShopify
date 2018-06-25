import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Lined from '../../img/lined-paper-2.png';

import v2Feat1 from '../../img/v2Feat1.jpg';
import v2Feat2 from '../../img/v2Feat2.jpg';
import SterlingSilverBracletFeatureImage from '../../img/SterlingSilverBracelet.jpg';
import SterlingSilverNecklaceImage from '../../img/SterlingSilverNecklace.jpg';
import NewReleasesNecklace from '../../img/SterlingSilverNewReleasesNecklace.jpg';
import SterlingSilverSimpleNecklaceImage from '../../img/SterlingSilverSimpleNecklace.jpg';
import v2Feat3 from '../../img/v2Feat3.jpg';
import v2Feat4 from '../../img/v2Feat4.jpg';
import Header from '../Header';
import IntroBanner from '../IntroBanner';
import BestSellerBanner from '../BestSellerBanner';

import NewReleasesBracelet from '../../img/NewReleasesBracelet.png';

const RootContainer = styled.div`
  padding-top: 17.5vw;
  width: 100%;
  height: auto;
  background-color: #131313;
  text-align: center;
`;

// Sterling Silver Feature
// ============================================================

const SterlingSilverFeature = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100vw;
  height: 100vw;
  background-color: #f2f2f2;
  background-image: url(${SterlingSilverBracletFeatureImage});
  background-size: cover;
`;

const SterlingSilverFeatureContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24vw;
  width: 100vw;
  text-align: center;
  // opacity: 0.8;
`;

const SterlingSilverFeatureTitle = styled.h1`
  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;
  font-size: 9vw;
  color: #f2f2f2;
  padding: 0vw 10vw;
  // background-color: white;
  // border: 5px black solid;
  text-shadow: 1px 3px 0px rgba(0, 0, 0, 0.2);
  -moz-text-stroke-color: #999;
  -webkit-text-stroke-color: #999;
  -moz-text-stroke-width: 2px;
  -webkit-text-stroke-width: 2px;
  margin-bottom: 10vw;
`;

const SterlingSilverFeatureButton = styled.div`
  border-radius: 1px;
  z-index: 2;
`;

const SterlingSilverFeatureButtonText = styled.h1`
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-size: 4vw;
  color: #131313;
  padding: 3vw 10vw;
  background-color: white;
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
`;

// Feature
// ============================================================

const Feature1 = styled.div`
  height: auto;
  width: auto;
  background-color: black;
`;
const Feature1Image = styled.div`
  width: 100vw;
  height: 100vw;
  background-image: url(${v2Feat1});
  background-size: cover;
`;
const Feature2Image = styled.div`
  width: 100vw;
  height: 115.66vw;
  background-image: url(${v2Feat2});
  background-size: cover;
`;
const Feature3Image = styled.div`
  width: 100vw;
  height: 100vw;
  background-image: url(${v2Feat3});
  background-size: cover;
`;
const Feature4Image = styled.div`
  width: 100vw;
  height: 115.67vw;
  background-image: url(${v2Feat4});
  background-size: cover;
`;

const Feature1Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw;
  text-align: right;
  background-color: #131313;
  width: 96vw;
  height: auto;
`;

const Feature1CardTitle = styled.h1`
  font-family: 'Roboto Condensed', cursive;
  font-size: 6vw;
  font-weight: 700;
  color: white;
  margin: 5vw 0;
`;

const Feature1CardButtonAndPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FeatureButton = styled.h1`
  font-family: 'Roboto Condensed', cursive;
  font-size: 5vw;
  background-color: white;
  font-weight: 700;
  color: black;
  margin: 0;
  padding: 2vw;
`;
const FeaturePrice = styled.h1`
  font-family: 'Roboto Condensed', cursive;
  font-size: 6vw;
  font-weight: 700;
  color: white;
  margin: 0;
`;
// New Releases
// ============================================================

const Separator = styled.div`
  background-color: #131313;
  height: 20vw;
`;

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

const NewReleasesShowcase = styled.div`
  background-color: #f2f2f2;
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  top: 103vw;
  height: 70vw;
  width: 100vw;
`;

const NewReleaseFeat1 = styled.div`
  background-color: black;
  z-index: 2;
  width: 50vw;
  height: 70vw;
  text-align: center;
  -webkit-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
`;
const NewReleaseFeat2 = styled.div`
  background-color: black;
  z-index: 2;
  width: 50vw;
  height: 70vw;
  text-align: center;
  -webkit-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.15);
`;

const NewReleaseFeat1Image = styled.div`
  background-color: blue;
  background-image: url(${SterlingSilverNecklaceImage});
  background-size: cover;
  width: 100%;
  height: 50vw;
`;
const NewReleaseFeat2Image = styled.div`
  background-color: blue;
  background-image: url(${SterlingSilverSimpleNecklaceImage});
  background-size: cover;
  width: 100%;
  height: 50vw;
`;
const NewReleaseFeatDescription = styled.div`
  background-color: #131313;
  width: 100%;
  height: 20vw;
`;

const NewReleaseFeatDescriptionTitle = styled.h1`
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-size: 3.5vw;
  color: white;
  margin: 0 2vw;
  padding-top: 4vw;
`;

// Misc
// ============================================================

const MediumBlackSeparator = styled.div`
  background-color: #131313;
  height: 3vw;
`;

const WhiteSeparator = styled.div`
  background-color: #f2f2f2;
  height: 3vw;
`;

export default class Featured extends Component {
  state = {};
  render() {
    return (
      <RootContainer>
        <SterlingSilverFeature>
          <SterlingSilverFeatureContentWrapper>
            <SterlingSilverFeatureTitle>
              StarSigned Sterling Silver & Stainless Steel
            </SterlingSilverFeatureTitle>
            <SterlingSilverFeatureButton>
              <Link to="/starsigned-sterling-silver-stainless-steel">
                <SterlingSilverFeatureButtonText>
                  Shop Now
                </SterlingSilverFeatureButtonText>
              </Link>
            </SterlingSilverFeatureButton>
          </SterlingSilverFeatureContentWrapper>
        </SterlingSilverFeature>

        <Header />

        <Feature1>
        <Link to="/starsigned-rings"> <Feature1Image /></Link>
          <Feature1Card>
            <Feature1CardTitle>
              Titanium Rose-gold Plated Starsigned Rings
            </Feature1CardTitle>
            <Feature1CardButtonAndPrice>
              <Link to="/starsigned-rings">
                <FeatureButton>Shop Rings</FeatureButton>
              </Link>
              <FeaturePrice>$14.95 USD</FeaturePrice>
            </Feature1CardButtonAndPrice>
          </Feature1Card>
        </Feature1>

        <MediumBlackSeparator />
        <MediumBlackSeparator />

        <BestSellerBanner />

        <Feature1>
        <Link to="/starsigned-necklaces"><Feature2Image />  </Link>
          <Feature1Card>
            <Feature1CardTitle>
              StarSigned Birthstone Necklace
            </Feature1CardTitle>
            <Feature1CardButtonAndPrice>
              <Link to="/starsigned-necklaces">
                <FeatureButton>Shop Necklaces</FeatureButton>
              </Link>
              <FeaturePrice>$15.95 USD</FeaturePrice>
            </Feature1CardButtonAndPrice>
          </Feature1Card>
        </Feature1>

        <MediumBlackSeparator />

        <IntroBanner />

        <Feature1>
        <Link to="/starsigned-bracelets"><Feature3Image /></Link>
          <Feature1Card>
            <Feature1CardTitle>
              Rose-gold Plated Stainless Steel Bracelet
            </Feature1CardTitle>
            <Feature1CardButtonAndPrice>
              <Link to="/starsigned-bracelets">
                <FeatureButton>Shop Bracelets</FeatureButton>
              </Link>
              <FeaturePrice>$14.95 USD</FeaturePrice>
            </Feature1CardButtonAndPrice>
          </Feature1Card>
        </Feature1>


        <MediumBlackSeparator />

        <Header />
      </RootContainer>
    );
  }
}

// <NewReleasesShowcase>
//             <NewReleaseFeat1>
//               <NewReleaseFeat1Image />
//               <NewReleaseFeatDescription>
//                 <NewReleaseFeatDescriptionTitle>
//                   StarSigned Sterling Silver Necklace
//                 </NewReleaseFeatDescriptionTitle>
//               </NewReleaseFeatDescription>
//             </NewReleaseFeat1>
//             <NewReleaseFeat2>
//               <NewReleaseFeat2Image />
//               <NewReleaseFeatDescription>
//                 <NewReleaseFeatDescriptionTitle>
//                   Stainless Steel Gold/Silver-plated Starbound Necklace
//                 </NewReleaseFeatDescriptionTitle>
//               </NewReleaseFeatDescription>
//             </NewReleaseFeat2>
//           </NewReleasesShowcase>

//
// <MediumBlackSeparator />

// <Feature1>
//   <Feature4Image />
//   <Feature1Card>
//     <Feature1CardTitle>
//       Titanium Rose-gold Plated Starsigned Rings
//     </Feature1CardTitle>
//     <Feature1CardButtonAndPrice>
//       <Link to="/starsigned-lights-home">
//         <FeatureButton>Shop Lights</FeatureButton>
//       </Link>
//       <FeaturePrice>$59.95 USD</FeaturePrice>
//     </Feature1CardButtonAndPrice>
//   </Feature1Card>
// </Feature1>
