import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

import { getCollection } from '../../../../reducers/collectionReducers';
import NecklaceItem from './NecklaceItem';

const RootContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
  padding-bottom: 50vh;
`;

const Grid = styled.div`
  margin-top: 5vw;
  width: 65%;
  display: grid;

  // grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
//   background-color: #fff;
  grid-gap: 1vw;
  @media (max-width: 415px) {
    width: 95%;
    grid-template-columns: repeat(1, 1fr);
    padding: 20vw 2.5% 0 2.5%;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20vw 0 0 0;
  height: 10vw;
  width: 100%;
`;
const LoadingText = styled.h1`
  font-family: 'Patua One', cursive;
  color: #222;
  font-size: 3vw;
`;

const CaseTypeToggle = styled.div`
  background-color: red;
  height: 10vh;
  width: 100%;
`;

const SimpleCaseButton = styled.button`
  background-color: black;
  width: 50%;
  height: 100%;
`;


class CollectionList extends Component {
  componentWillMount() {
    const { getCollection, collectionStringProps } = this.props;
    getCollection(collectionStringProps);
  }

  render() {
    const { collection, collectionStringProps } = this.props;
    console.log('collections: ', collection);
    if (collection === undefined) {
      return (
        <Loading>
          <LoadingText>Loading...</LoadingText>
        </Loading>
      );
    } else {
      return (
        <RootContainer>
          <Grid>
            {collection[collectionStringProps].map(collectionItem => {
              let image = collectionItem.images[0];
              console.log("images: ",image.originalSrc)
              return (
                <NecklaceItem
                  key={collectionItem.id}
                  id={collectionItem.id}
                  title={collectionItem.title}
                  image={image.originalSrc}
                  pathString={collectionStringProps}
                />
              );
            })}
          </Grid>
        </RootContainer>
      );
    }
  }
}

const mapStateToProps = state => ({
  collection: state.collections.collections[0]
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
  connect(mapStateToProps, mapDispatchToProps)(CollectionList)
);

// <Grid>
//             {collection.map(collectionArray => {
//               let image = collectionArray.images.transformedSrc;
//               return (
//                 <CaseItem
//                   key={collectionArray.id}
//                   id={collectionArray.id}
//                   title={collectionArray.title}
//                   desc={collectionArray.description}
//                   image={image}
//                 />
//               );
//             })}
//           </Grid>
