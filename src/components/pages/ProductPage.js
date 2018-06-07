import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import VariantSelector from '../VariantSelector';
import Header from '../Header';

import {
  getProduct,
  getSelectedVariantByID
} from '../../../reducers/productReducers';

import TrustBadge from '../../img/Trust_Badge_2.png';

// ============================================================
// Styles Start
// ============================================================
const RootContainer = styled.div`
  @media (max-width: 415px) {
    padding-top: 20vw;
  }
`;

const ProductCardWrapper = styled.div`
  background-color: #fff;
  text-align: center;
  width: 96%;
  height: auto;
  padding-bottom: 5vw;
  border: solid 1px #ccc;
  border-bottom: solid 3px #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 2%;
  -webkit-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.21);
`;

// Title, Price and Description
// ============================================================

const Title = styled.h1`
  color: #111;
  font-family: 'Amatic SC', cursive;
  @media (max-width: 415px) {
    background-color: #fff;
    width: auto;
    font-size: 8vw;
    font-weight: 700;
    padding: 2vw;
    margin-top: 0;
    margin-bottom: 4vw;
    -webkit-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.07);
  }
`;

const Price = styled.h1`
  color: #b86161;
  font-family: 'Gamja Flower', cursive;
  @media (max-width: 415px) {
    width: 25%;
    font-size: 5vw;
    padding: 2vw;
    margin: 0 37.5%;
    border-radius: 2vw;
    margin-bottom: 4vw;
  }
`;

const Description = styled.h1`
  font-family: 'Roboto', cursive;
  font-size: 0.75vw;
  font-weight: 500;
  color: black;
  margin-top: 0.5vw;
  @media (max-width: 415px) {
    font-size: 4vw;
    padding: 0 2vw;
    color: #333;
  }
`;

//  VariantSelector Wrapper
// ============================================================
const VariantSelectorAndCartWrapper = styled.div`
  width: 96%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1vw 2%;
  margin-bottom: 0;
  border: solid 1px #eee;
  border-bottom: solid 1px #ddd;
  border-radius: 5px;
  overflow: hidden;
  -webkit-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.07);
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
    justify-content: center;
  }
`;

const AddToCartButton = styled.button`
  width: 90%;
  height: 3vw;
  background-color: #b86161;
  border: none;
  border-radius: 0.2vw;
  @media (max-width: 415px) {
    height: 15vw;
    border-radius: 1vw;
  }
`;

const AddToCartText = styled.h1`
  color: white;
  font-size: 4vw;
`;

// Trust Badge Image
// ============================================================
const TrustBadgeWrapper = styled.div`
  height: 16vw;
  width: 90vw;
  background-image: url(${TrustBadge});
  background-size: contain;
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
    const { variantImages } = this.state;
    if (product) {
      console.log(product);
      return (
        <RootContainer>
          <ImageGallery
            showFullscreenButton={false}
            showThumbnails={true}
            style={{ background: 'transparent'}}
            //   showNav={false}
            showPlayButton={false}
            items={variantImages}
          />

          <ProductCardWrapper>
            <Title>{product.title}</Title>
            <Description dangerouslySetInnerHTML={{__html: product.descriptionHtml}}></Description>
            <Price>${selectedVariant.price}</Price>
            <VariantSelectorAndCartWrapper>
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
                <AddToCartButton
                  onClick={() => addVariantToCart(selectedVariant.id, 1)}
                >
                  <AddToCartText>Add To Cart</AddToCartText>
                </AddToCartButton>
              </AddToCartWrapper>
              <TrustBadgeWrapper />
            </VariantSelectorAndCartWrapper>
            </ProductCardWrapper>
            <Header />
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
