import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import VariantSelector from './VariantSelector';

import {
  getProduct,
  getSelectedVariantByID
} from '../../../../reducers/productReducers';

// ============================================================
// Styles Start
// ============================================================
const RootContainer = styled.div`
  @media (max-width: 415px) {
    padding-top: 20vw;
    background-color: #eee;
  }
`;

// Gallery
// ============================================================
const ImageGalleryWrapper = styled.div`
  justify-self: center;
  background-color: #ddd;
  align-self: start;
  border-radius: 1vw;
  height: 30.5vw;
  width: 30.5vw;
  @media (max-width: 415px) {
    background-color: #eee;
    height: 100vw;
    width: 100vw;
    // margin-bottom: 20vw;
  }
`;

// Title and Description
// ============================================================
const Title = styled.h1`
  color: #eee;
  font-family: 'Permanent Marker', cursive;
  @media (max-width: 415px) {
    background-color: black;
    width: auto;
    font-size: 8vw;
    padding: 2vw;
  }
`;

const Description = styled.h1`
  font-family: 'Patua One', cursive;
  font-size: 0.75vw;
  font-weight: 300;
  color: black;
  margin-top: 0.5vw;
  @media (max-width: 415px) {
    font-size: 3.5vw;
    color: #111;
  }
`;

// Add To Cart
// ============================================================
const AddToCartWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 5vw;
  width: 100%;
  // background-color: #111;
  @media (max-width: 415px) {
    height: auto;
    padding-bottom: 3vh;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const AddToCartButton = styled.button`
  width: 66%;
  height: 3vw;
  background-color: red;
  border: none;
  border-radius: 0.2vw;
  @media (max-width: 415px) {
    height: 15vw;
    border-radius: 1vw;
  }
`;

const Loading = styled.div`
  height: 20vh;
  width: 100%;
  background-color: red;
`;

export class ProductPage extends Component {
  state = { selectedOptions: [] };

  // ============================================================
  // Methods
  // ============================================================

  componentWillMount = () => {
    const { getProduct, match, product } = this.props;
    getProduct(match.params.handle);
  };

  componentWillReceiveProps(nextProps) {
    const { product } = this.props;
    let arr = [];
    if (product) {
      const variantImages = product.images.map((image, index) => {
        return (arr[index] = {
          original: `${image.originalSrc}`,
          thumbnail: `${image.originalSrc}`,
          originalClass: `image_styles`
        });
      });
      this.setState({ variantImages: arr });
    }
  }

  onSelectorChange = (value, props) => {
    console.log('Value: ', props.props.value);
    console.log('Option: ', props.props.parent);

    let selectedOptions = Object.assign({}, this.state.selectedOptions);
    selectedOptions[props.props.parent] = props.props.value;
    console.log('onSelectorChange: ', selectedOptions);
    this.setState({ selectedOptions }, params => this.findVariantByOptions());
  };

  initialVariantSelectorLoad = (option, value) => {
    const { selectedOptions } = this.state;
    console.log('Init Value: ', value);
    console.log('Init Option: ', option);

    let selectedOpt = Object.assign({}, selectedOptions);
    selectedOptions[option] = value;

    this.setState(
      selectedOptions => Object.assign({}, selectedOptions, { selectedOpt }),
      params => this.findVariantByOptions()
    );

    console.log(
      'initVariantSelectorLoad[State Set]: ',
      this.state.selectedOptions
    );
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

  // ============================================================
  // Render Start
  // ============================================================
  render() {
    const { product, addVariantToCart, selectedVariant } = this.props;
    const { variantImages,  } = this.state;
    if (product) {
      console.log(product);
      return (
        <RootContainer>
          <ImageGallery
            showFullscreenButton={false}
            showThumbnails={true}
            style={{ background: 'transparent' }}
            //   showNav={false}
            showPlayButton={false}
            items={variantImages}
          />
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
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
          <AddToCartWrapper>
            <AddToCartButton onClick={() => (addVariantToCart(selectedVariant.id, 1))}>Add To Cart</AddToCartButton>
          </AddToCartWrapper>
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
