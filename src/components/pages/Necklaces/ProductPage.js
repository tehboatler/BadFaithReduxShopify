import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { getProduct } from '../../../../reducers/productReducers';

const RootContainer = styled.div`
  @media (max-width: 415px) {
    padding-top: 20vw;
    background-color: blue;
  }
`;

const Title = styled.h1`
  color: red;
  @media (max-width: 415px) {
  }
`;

const Loading = styled.div`
  height: 20vh;
  width: 100%;
  background-color: red;
`;

export class ProductPage extends Component {
  state = { productLoaded: false };
  componentDidMount() {
    const { getProduct, match } = this.props;
    console.log('CDM getProduct() fired!');
    getProduct(match.params.handle);
  }

  render() {
    const { product } = this.props;

    if (product) {
      return (
        <RootContainer>
          <Title>{product.title}</Title>
        </RootContainer>
      );
    } else {
      return <Loading />;
    }
  }
}

const mapStateToProps = (state, { match }) => ({
  product: state.products.products[match.params.handle]
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getProduct
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductPage)
);
