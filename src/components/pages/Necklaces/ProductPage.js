import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import VariantSelector from './VariantSelector';

import {
  getProduct,
  getSelectedVariantByID
} from '../../../../reducers/productReducers';

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
  state = { selectedOptions: [] };

  componentWillMount = () => {
    const { getProduct, match, product } = this.props;
    getProduct(match.params.handle);
  };

  onSelectorChange = (value, props) => {
    console.log('Value: ', props.props.value);
    console.log('Option: ', props.props.parent);

    let selectedOptions = Object.assign({}, this.state.selectedOptions);
    selectedOptions[props.props.parent] = props.props.value;
    console.log('onSelectorChange: ', selectedOptions);
    this.setState({ selectedOptions },(params) => (this.findVariantByOptions()));
   
  };

  // NOTE: Not loading w/ more than one option item.
  initialVariantSelectorLoad = (option, value) => {
    const { selectedOptions } = this.state;
    console.log('Init Value: ', value);
    console.log('Init Option: ', option);

    let selectedOpt = Object.assign({}, selectedOptions);
    selectedOptions[option] = value;

    this.setState(selectedOptions =>
      Object.assign({}, selectedOptions, {
        selectedOpt
      }),((params) => (this.findVariantByOptions()))
    );

    console.log('initVariantSelectorLoad[State Set]: ', this.state.selectedOptions);
  
  };

  findVariantByOptions = () => {
    const { match, getSelectedVariantByID } = this.props;
    const { selectedOptions } = this.state;

    const keys = Object.keys(selectedOptions);
    const values = Object.values(selectedOptions);

    let arr = [];
    for (var i = 0; i < keys.length; i++) {
      arr.push({ name: `${keys[i]}`, value: `${values[i]}` });
    }
    
    console.log(arr);
    getSelectedVariantByID(arr, match.params.handle);
  };


  render() {
    const { product } = this.props;
    if (product) {
      console.log(product);
      return (
        <RootContainer>
          <Title>{product.title}</Title>
          {product.options.map(option => {
            return (
              <VariantSelector
                initialLoad={this.initialVariantSelectorLoad}
                onHandleChange={this.onSelectorChange}
                name={option.name}
                options={option}
              />
            );
          })}
        </RootContainer>
      );
    } else {
      return <Loading />;
    }
  }
}

const mapStateToProps = (state, { match }) => ({
  product: state.products.products[match.params.handle],
  selectedVariant: state.products.selectedVariant
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getProduct,
      getSelectedVariantByID
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductPage)
);
