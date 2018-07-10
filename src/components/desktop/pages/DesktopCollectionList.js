import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Instagram } from 'react-content-loader';
import Fade from 'react-reveal/Fade';
import { Spring } from 'react-spring';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import DesktopProductItem from '../DesktopProductItem';
import DesktopPromoBanner from '../DesktopPromoBanner';

import { getCollection } from '../../../../reducers/collectionReducers';
import DesktopHeader from '../DesktopHeader';

// Root
// ============================================================
const RootContainer = styled.div`
  width: 75%;
  margin: 0 12.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const Grid = styled.div`
  margin-top: 2vw;
  padding-top: 2vw;
  width: 80%;
  margin: 0 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //   background-color: #fff;
  grid-gap: 0.5vw;
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
  margin: 0 10%;
  margin-top: 8vw;
  height: auto;
  text-align: center;
  width: 80%;
`;

const TopNavTitle = styled.h1`
  font-family: 'Archivo Black', Arial, Helvetica, sans-serif;
  font-size: 1.5vw;
  color: #1e1e1e;
  font-weight: 800;
  background-color: white;
  padding: 1vw;
  margin-top: 0.5vw;
  margin-bottom: 1vw;
//   -webkit-box-shadow: 0px 10px 13px -2px rgba(0, 0, 0, 0.4);
//   -moz-box-shadow: 0px 10px 13px -2px rgba(0, 0, 0, 0.4);
//   box-shadow: 0px 10px 13px -2px rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const TopNavDescription = styled.h1`
  color: white;
  margin: 1vw 1vw;
  font-size: 0.7vw;
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

class DesktopCollectionList extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    console.log('DesktopCollectionList CDM!');
    const { getCollection, collectionStringProps } = this.props;
    getCollection(collectionStringProps);
  };

  componentWillReceiveProps(nextProps) {
    console.log('next props: ', nextProps);
    if (nextProps.collection === undefined) {
      nextProps.getCollection(nextProps.collectionStringProps);
      console.log('CWRP Collection getCollection Fired!');
      window.scrollTo(0, 0);
    }
    if (nextProps.collectionNode) {
      console.log('TEST!!!!!');
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
              <DesktopPromoBanner />
              <TopNavTitle>{collectionNode.title}</TopNavTitle>
              <DesktopHeader />
            </TopNav>
            <Grid>
              {collection.map(collectionItem => {
                let image = collectionItem.images[0];
                let variants = collectionItem.variants[0];
                console.log('images: ', image);
                return (
                  <Fade bottom>
                    <DesktopProductItem
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

            {console.log('Last Render~')}
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
  )(DesktopCollectionList)
);
