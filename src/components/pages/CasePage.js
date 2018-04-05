import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Select, { Option } from 'rc-select';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';
import createHistory from 'history/createBrowserHistory';

import 'react-image-gallery/styles/css/image-gallery.css';
import 'rc-select/assets/index.css';
import './slider.css';

import { getCase } from '../../../actions/caseActions';
import PhoneCase from '../../img/BadFaithHeaderPhone.png';

const history = createHistory({
  forceRefresh: true
});

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92.5vh;
  background-color: #fff;

  @media (max-width: 415px) {
    height: auto;
    background-color: #fff;
    align-items: none;
  }
`;

const ItemWrapper = styled.div`
  width: 66vw;
  height: 35vw;
  // background-color: #333;
  display: grid;
  grid-template-columns: 7fr 5fr;
  grid-gap: 0.5em;

  @media (max-width: 415px) {
    grid-template-columns: 1fr;
    height: auto;
    width: 100vw;
  }
`;

const CaseImageWrapper = styled.div`
  justify-self: center;
  //   background-color: #DDD;
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

const CaseImage = styled.img`
  height: 100%;
  width: 100%;
  user-select: none;
  pointer-events: none;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 33vw;
  align-self: end;
  width: 100%;
  //   padding-left: 2.5vw;
  //   background-color: blue;
  @media (max-width: 415px) {
    // margin: 0 5%;
    // width: 90%;
    height: 150vw;
    // border-top: 2px solid #e5e5e5;
    align-items: center;
  }
`;

const ItemDescription = styled.div`
  height: 10vw;
  width: 100%;
  // background-color: red;
  @media (max-width: 415px) {
    height: auto;
    padding: 5% 0;
    background-color: #fff;
    border-bottom: 2px solid #e5e5e5;
    margin-bottom: 2vw;
  }
`;
const ItemTitle = styled.h1`
  // background-color: black;
  font-family: 'Permanent Marker', cursive;
  font-size: 3vw;
  display: block;
  background-color: #111;
  color: #eee;
  margin: 0;
  @media (max-width: 415px) {
    font-size: 7vw;
    padding: 2vw 5%;
  }
`;
const PriceWrapper = styled.div`
  height: 10vw;
  width: 100%;
  // background-color: red;
  @media (max-width: 415px) {
    height: auto;
    margin-bottom: 2vw;
  }
`;

const ItemFullPrice = styled.h1`
  // background-color: black;
  font-family: 'Patua One', cursive;
  font-size: 1.3vw;
  font-weight: 300;
//   text-decoration: line-through;
  color: black;
  margin: 0;
  @media (max-width: 415px) {
    font-size: 4vw;
    padding: 0 5%;
    color: #111;
  }
`;

const ItemPrice = styled.h1`
  // background-color: black;
  display: block;
  float: right;
  font-family: 'Patua One', cursive;
  font-size: 1.3vw;
  font-weight: 300;
  color: black;
  margin: 0;
  @media (max-width: 415px) {
    font-size: 4vw;
    padding: 0 5%;
    color: white;
    background-color: red;
  }
`;
const ItemTagline = styled.h1`
  // background-color: black;
  font-family: 'Patua One', cursive;
  font-size: 1vw;
  font-weight: 200;
  color: black;
  margin-top: 0.5vw;
  @media (max-width: 415px) {
    margin-top: 2vw;
    font-size: 4vw;
    color: #111;
    padding: 0 5%;
  }
`;

const ItemCheckoutDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 23vw;
  width: 90%;
  //   background-color: grey;
  @media (max-width: 415px) {
    height: 110vw;
    padding: 5%;
    margin-bottom: 5vh;
    // background-color: #f2f2f2;
    // border-radius: 2vw;
    background: -moz-linear-gradient(
      top,
      rgba(238, 238, 238, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(238, 238, 238, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(238, 238, 238, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
`;

const PhoneVariantSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  height: 7.5vw;
  width: 100%;
  margin-bottom: 1vw;
  //   background-color: #eee;
  //   background-color: grey;
  @media (max-width: 415px) {
    height: 10vw;
    align-self: center;
    justify-content: center;
    margin-bottom: 5vw;
  }
`;
const ProductDetailsWrapper = styled.div`
  height: 10vw;
  width: 100%;
  //   background-color: #eee;
  @media (max-width: 415px) {
    height: 50vw;
  }
`;

const ProductDetailSummary = styled.h1`
  // background-color: black;
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

const AddToCartButtonText = styled.h1`
  color: white;
  font-size: 1.1vw;
  font-family: 'Bungee', cursive;
  @media (max-width: 415px) {
    font-size: 6vw;
    line-height: 0;
    margin: 0;
  }
`;

const SelectTitle = styled.h1`
  // background-color: black;
  font-family: 'Bungee', cursive;
  font-size: 1vw;
  font-weight: 300;
  color: black;
  margin: 0;
  @media (max-width: 415px) {
    font-size: 4vw;
    color: #111;
  }
`;

const SingleSelectWrapper = styled.div`
  margin: 0.3vw;
  height: auto;
  width: 66%;
  background-color: #ddd;
  border-radius: 0.2vw;
  @media (max-width: 415px) {
    width: 100%;
    height: 7vw;
    margin-bottom: 2vw;
  }
`;

class CasePage extends Component {
  state = {};

  checkProduct = test => {
    const { match } = this.props;
    return test.title === match.params.title;
  };

  retrieveCurrentCase = () => {
    const { productlist } = this.props;
    if (productlist) {
      const products = productlist.find(this.checkProduct);
      this.setState({
        currentCaseParams: products
      });
    } else {
      history.push('/');
    }
  };

  componentWillMount = () => {
    console.log('test');
    this.retrieveCurrentCase();

    //   findImage(images, variantId) {
    //     const primary = images[0];

    //     const image = images.filter(function (image) {
    //       return image.variant_ids.includes(variantId);
    //     })[0];

    //     return (image || primary).src;
    //   }
  };

  componentDidMount = () => {
    const { currentCaseParams } = this.state;
    window.scrollTo(0, 0);
    currentCaseParams.options.forEach(selector => {
      this.setState({
        selectedOptions: {
          [selector.name]: selector.values[0].value
        }
      });
    });

    // ============================================================
    let arr = [];
    const variantImages = currentCaseParams.images.map((image, index) => {
      //   return <CaseImage key={image.src} original={image.src} />;
      return (arr[index] = {
        original: `${image.src}`,
        thumbnail: `${image.src}`,
        originalClass: `image_styles`
      });
    });
    this.setState({ variantImages: arr });

    // ============================================================

    this.onChange('iPhone X Slim');
  };

  onChange = value => {
    const { selectedOptions, currentCaseParams } = this.state;
    console.log(value);

    // ============================================================
    // Note: Hardcoded
    // ============================================================
    let option = 'Size';

    const selectedVariant = currentCaseParams.variants.find(variant => {
      return variant.selectedOptions.every(selectedOption => {
        return value === selectedOption.value;
      });
    });
    console.log(selectedVariant);
    this.setState({
      selectedOptions: {
        [option]: selectedVariant.title,
        variantID: selectedVariant.id,
        price: selectedVariant.price
      }
    });
  };

  render() {
    const { currentCaseParams, variantImages, selectedOptions } = this.state;
    const { addVariantToCart } = this.props;

    let initialVariantPrice = currentCaseParams.variants[0];

    console.log('Variant Price: ', initialVariantPrice.price);
    let variants = currentCaseParams.variants.map(variant => (
      <Option
        className="selector_option_styles"
        key={variant.title}
        value={variant.title}
      >
        {variant.title}
      </Option>
    ));

    return (
      <RootContainer>
        <ItemWrapper>
          <CaseImageWrapper>
            <ImageGallery
              showFullscreenButton={false}
              showThumbnails={false}
              style={{ background: 'transparent' }}
              //   showNav={false}
              showPlayButton={false}
              items={variantImages}
            />
          </CaseImageWrapper>
          <ItemDetails>
            <ItemDescription>
              <ItemTitle>{currentCaseParams.title}</ItemTitle>
              <ItemTagline>{currentCaseParams.description}</ItemTagline>
              <ItemFullPrice>${initialVariantPrice.price}</ItemFullPrice>
            </ItemDescription>
            <ItemCheckoutDetail>
              <PhoneVariantSelectorWrapper>
                <SelectTitle>Model:</SelectTitle>
                <SingleSelectWrapper>
                  <Select
                    allowClear
                    placeholder="Select A Phone"
                    defaultValue="iPhone X Slim"
                    className="selector_wrapper_styles"
                    animation="slide-up"
                    showSearch={false}
                    onChange={this.onChange}
                  >
                    {variants}
                  </Select>
                </SingleSelectWrapper>
              </PhoneVariantSelectorWrapper>
              <ProductDetailsWrapper>
                <SelectTitle>Product Details:</SelectTitle>
                <ProductDetailSummary>
                  Our Slim Case combines premium protection with brilliant
                  design. The slim profile keeps your tech looking sleek, while
                  guarding against scuffs and scratches. Just snap it onto your
                  phone and you’re good to go.
                </ProductDetailSummary>
                <ProductDetailSummary>- Impact Resistant</ProductDetailSummary>
                <ProductDetailSummary>
                  - One-piece build: flexible plastic hard case
                </ProductDetailSummary>
                <ProductDetailSummary>
                  - Extremely slim profile
                </ProductDetailSummary>
              </ProductDetailsWrapper>
              <AddToCartWrapper>
                <AddToCartButton
                  onClick={() => addVariantToCart(selectedOptions.variantID, 1)}
                >
                  <AddToCartButtonText>Add To Cart</AddToCartButtonText>
                </AddToCartButton>
              </AddToCartWrapper>
            </ItemCheckoutDetail>
          </ItemDetails>
        </ItemWrapper>
      </RootContainer>
    );
  }
}

export default CasePage;
