import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Instagram } from 'react-content-loader';

import styled from 'styled-components';

import { getCollection } from '../../../reducers/collectionReducers';
import ProductItem from '../ProductItem';
import CollectionListHeader from '../CollectionListHeader';
import IntroBanner from '../IntroBanner';
import BestSellerBanner from '../BestSellerBanner';

// Root
// ============================================================
const RootContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
`;

const Grid = styled.div`
  margin-top: 2vw;
  width: 65%;
  display: grid;

  // grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
  //   background-color: #fff;
  grid-gap: 1vw;
  @media (max-width: 415px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    // padding: 0vw 2.5% 0 2.5%;
    margin-bottom: 2vw;
    padding-bottom: 2vw;
  }
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
  margin-top: 20vw;
  background-color: #111;
  height: auto;
  text-align: center;
  width: 100%;
  -webkit-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
  -moz-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
  box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
`;

const TopNavTitle = styled.h1`
  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;
  font-size: 7vw;
  color: black;
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

// Collection Page Nav
// ============================================================
const Nav = styled.div`
  // background-color: red;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1vw;
  width: 100%;
  height: auto;
`;

// Guarantee
// ============================================================
const GuaranteeWrapper = styled.div`
  width: 100%;
  margin: 2vw 0;
  background-color: black;
  -webkit-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 10px 13px -1px rgba(0, 0, 0, 0.4);
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

  render() {
    const { collection, collectionNode, collectionStringProps } = this.props;
    if (collection) {
      console.log('collections: ', collection);
      return (
        <div>
          <RootContainer>
            <TopNav>
              <CollectionListHeader />
              <TopNavTitle>{collectionNode.title}</TopNavTitle>
              <TopNavDescription>
                What are we made of? Learn more.
              </TopNavDescription>
            </TopNav>
            <Grid>
              {collection.map(collectionItem => {
                let image = collectionItem.images[0];
                let variants = collectionItem.variants[0];
                console.log('images: ', image);
                return (
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
                );
              })}
            </Grid>
            <BestSellerBanner/>
            <GuaranteeWrapper>
              <TopNavDescription>
                Our products have high quality standards that will give you the
                best value for your money. Every product we sell come with a
                30-day money back guarantee.
              </TopNavDescription>
            </GuaranteeWrapper>
            <CollectionListHeader />
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
