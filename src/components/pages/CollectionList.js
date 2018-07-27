import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Instagram } from 'react-content-loader';
import { Spring } from 'react-spring';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { getCollection } from '../../../reducers/collectionReducers';
import CollectionListGiveawayBanner from '../../img/GiveawayBannerCollectionListTop.jpg';
import StarSignedKeepsakesBannerImage from '../../img/StarSignedKeepsakesBanner.jpg';
import LunarCrescentBannerImage from '../../img/LunarCrescentBanner.jpg';
import Header from '../CollectionListHeader';
import Footer from '../Footer';
import ProductItem from '../ProductItem';

// Root
// ============================================================
const RootContainer = styled.div`
  width: 100%;
  // margin: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
`;

const Grid = styled.div`
  margin-top: 2vw;
  display: grid;
  background-color: white;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    // padding: 0vw 2.5% 0 2.5%;
    margin-bottom: 2vw;
    padding-bottom: 2vw;
  }
  `;

// Promo Banner
// ============================================================
const PromoBanner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  height: 10vw;
  width: 100%;
  justify-content: center;
  align-items: flex-end;

  margin-bottom: 1vw;
  // -webkit-box-shadow: 0px 3px 30px -2px rgba(54, 54, 54, 0.14);
  // -moz-box-shadow: 0px 3px 10px -2px rgba(54, 54, 54, 0.14);
  // box-shadow: 0px 3px 10px -2px rgba(54, 54, 54, 0.14);
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
  align-self: flex-end;
  font-size: 2vw;
  padding-right: 3vw;
  // padding-top: 1vw;
  color: black;
`;

// Loading
// ============================================================
const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20vw 0 0 0;
  height: 80vh;
  width: 100%;
`;
const LoadingText = styled.h1`
  font-family: 'Patua One', cursive;
  color: #222;
  font-size: 3vw;
`;

// Collection Page Description + Top Nav
// ============================================================
const TopNav = styled.div`
  margin-top: 30vw;
  // background-color: #111;
  height: auto;
  text-align: center;
  width: 100%;
  -webkit-box-shadow: 0px 4px 15px -9px rgba(54, 54, 54, 0.15);
  -moz-box-shadow: 0px 4px 15px -9px rgba(54, 54, 54, 0.15);
  box-shadow: 0px 4px 15px -9px rgba(54, 54, 54, 0.15);
`;

const TopNavTitle = styled.h1`
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-size: 4vw;
  color: grey;
  font-weight: 800;
  background-color: white;
  padding: 1vw;
  margin-top: 0.5vw;
  margin-bottom: 1vw;
  -webkit-box-shadow: 0px 10px 13px -2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 10px 13px -2px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 10px 13px -2px rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const TopNavDescription = styled.h1`
  color: white;
  margin: 5vw 5vw;
  font-size: 4vw;
`;

// Banners
// ============================================================
const GiveawayWrapper = styled.div`
  width: 100vw;
  height: 31.3vw;
  background-image: url(${CollectionListGiveawayBanner});
  background-size: cover;
  // -webkit-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.4);
  // -moz-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.4);
  // box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.4);
`;
const StarSignedKeepsakesBanner = styled.div`
  width: 100vw;
  height: 31.3vw;
  background-image: url(${StarSignedKeepsakesBannerImage});
  background-size: cover;
  // -webkit-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.4);
  // -moz-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.4);
  // box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.4);
`;
const LunarCrescentBanner = styled.div`
  width: 100vw;
  height: 31.3vw;
  background-image: url(${LunarCrescentBannerImage});
  background-size: cover;
  // -webkit-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.4);
  // -moz-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.4);
  // box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.4);
`;

class CollectionList extends Component {
  componentWillMount() {
    const { getCollection, collectionStringProps } = this.props;
    getCollection(collectionStringProps);
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    console.log('CollectionList CDM!');
  };

  componentWillReceiveProps(nextProps) {
    console.log('next props: ', nextProps);
    if (nextProps.collection === undefined) {
      nextProps.getCollection(nextProps.collectionStringProps);
      window.scrollTo(0, 0);
    }
  }

  GiveawaySignUp = () => {
    window.open('https://mailchi.mp/d1621e04444e/ssprintsandapparel');
  };


  render() {
    const { collection, collectionNode, collectionStringProps } = this.props;
    if (collection) {
      console.log('collections: ', collection);
      return (
        <div>
          <RootContainer>
            <TopNav>
              <Spring
                from={{ opacity: 0, height: '0vw' }}
                to={{ opacity: 1, height: '10vw' }}>
                {styles => (
                  <PromoBanner style={styles}>
                   
                 
                    <PromoBannerText>
                      25% off on Cancer Items storewide! COUPON CODE: CANCER25
                    </PromoBannerText>
                  </PromoBanner>
                )}
              </Spring>
               {collectionNode.title === 'Lunar Crescent Collection' && <LunarCrescentBanner/> }
               {collectionNode.title === 'StarSigned Keepsakes' && <StarSignedKeepsakesBanner/> }
              {/* <TopNavTitle>{collectionNode.title}</TopNavTitle> */}
              <Header selectionToggle={collectionNode.title}/>
            </TopNav>
            <Grid>
              {collection.map(collectionItem => {
                let image = collectionItem.images[0];
                let variants = collectionItem.variants[0];
                console.log('images: ', image);
                return (
                  <Fade>
                    <ProductItem
                      key={collectionItem.id}
                      id={collectionItem.id}
                      handle={collectionItem.handle}
                      title={collectionItem.title}
                      image={image.originalSrc}
                      pathString={collectionStringProps}
                      price={variants.price}
                      compareAtPrice={variants.compareAtPrice}
                    />
                  </Fade>
                );
              })}
            </Grid>
            <GiveawayWrapper onClick={this.GiveawaySignUp}/>
            <Footer/>
          </RootContainer>
        </div>
      );
    } else {
      return (
        <Loading>
          <Instagram />
          <LoadingText>Loading...</LoadingText>
        </Loading>
      );
    }
  }
}

const mapStateToProps = (state, { collectionStringProps }) => ({
  collection: state.collections.collections[collectionStringProps],
  collectionNode: state.collections.collections.collectionNode
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCollection
    },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CollectionList)
);

// <TopNavDescription>
// Our products have high quality standards that will give you the
// best value for your money. Every product we sell come with a
// 30-day money back guarantee.
// </TopNavDescription>
