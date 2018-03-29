import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Select, { Option } from 'rc-select';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';
import 'rc-select/assets/index.css';
import './slider.css';

import { getCase } from '../../../actions/caseActions';
import PhoneCase from '../../img/BadFaithHeaderPhone.png';

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92.5vh;
  background-color: #fff;
`;

const ItemWrapper = styled.div`
  width: 66vw;
  height: 35vw;
  // background-color: #333;
  display: grid;
  grid-template-columns: 7fr 5fr;
  grid-gap: 2em;
`;

const ItemImageCarousel = styled.div`
  width: 100%;
  height: 33vw;
  background-color: #111;
`;

const CaseImageWrapper = styled.div`
  justify-self: center;
  align-self: start;
  background-color: #222;
  border-radius: 1vw;
  height: 30.5vw;
  width: 30.5vw;
`;

const CaseImage = styled.img`
  height: 100%;
  width: 100%;
//   mix-blend-mode: multiply;
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
`;

const ItemDescription = styled.div`
  height: 13vw;
  width: 100%;
  //   background-color: red;
`;

const ItemTitle = styled.h1`
  // background-color: black;
  font-family: 'Permanent Marker', cursive;
  font-size: 3vw;
  color: black;
  margin: 0;
  `;
  
  const ItemTagline = styled.h1`
  // background-color: black;
  font-family: 'Permanent Marker', cursive;
  font-size: 1.3vw;
  font-weight: 300;
  color: black;
  margin: 0;
`;

const ItemCheckoutDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 20vw;
  width: 100%;
//   background-color: grey;
`;

const PhoneVariantSelectorWrapper = styled.div`
  height: 7.5vw;
  width: 100%;
//   background-color: #eee;
`;
const PhoneQuantitySelectorWrapper = styled.div`
  height: 7.5vw;
  width: 100%;
//   background-color: #eee;
`;

const AddToCartWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 5vw;
  width: 100%;
  // background-color: #111;
`;

const AddToCartButton = styled.button`
  width: 100%;
  height: 3vw;
  background-color: red;
  border: none;
  border-radius: 0.2vw;
`;

const AddToCartButtonText = styled.h1`
  color: white;
  font-size: 1.1vw;
`;

const SingleSelectWrapper = styled.div`
  margin: 0.3vw;
  height: auto;
  width: 66%;
  background-color: #ddd;
  border-radius: 0.2vw;
`;

class CasePage extends Component {
  state = {};

  checkProduct = test => {
    const { match } = this.props;
    return test.title === match.params.title;
  };

  retrieveCurrentCase = () => {
    const { productlist } = this.props;
    const products = productlist.find(this.checkProduct);
    this.setState({
      currentCaseParams: products
    });
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

    currentCaseParams.options.forEach(selector => {
      this.setState({
        selectedOptions: { [selector.name]: selector.values[0].value }
      });
    });
    let arr = [];
    const variantImages = currentCaseParams.images.map((image, index) => {
      //   return <CaseImage key={image.src} original={image.src} />;
      return (arr[index] = {
        original: `${image.src}`,
        thumbnail: `${image.src}`
      });
    });
    this.setState({ variantImages: arr });
  };

  onChange = value => {
    const { selectedOptions, currentCaseParams } = this.state;
    console.log(value);
    // const target = value.target;
    // let selectedOptions = this.state.selectedOptions;
    // selectedOptions[target.name] = target.value;

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
        variantID: selectedVariant.id
      }
    });
  };

  render() {
    const { currentCaseParams, variantImages } = this.state;
    const { addVariantToCart } = this.props;

    let variants = currentCaseParams.variants.map(variant => (
      <Option key={variant.title} value={variant.title}>
        {variant.title}
      </Option>
    ));

    return (
      <RootContainer>
        <ItemWrapper>
          <CaseImageWrapper>
            <ImageGallery
              showFullscreenButton={false}
              //   showNav={false}
              showPlayButton={false}
              items={variantImages}
            />
          </CaseImageWrapper>
          <ItemDetails>
            <ItemDescription>
              <ItemTitle>{currentCaseParams.title}</ItemTitle>
              <ItemTagline>{currentCaseParams.description}</ItemTagline>
            </ItemDescription>
            <ItemCheckoutDetail>
              <PhoneVariantSelectorWrapper />
              <PhoneQuantitySelectorWrapper>
                <SingleSelectWrapper>
                  <Select
                    allowClear
                    placeholder="Select A Phone"
                    defaultValue="iPhone X"
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent'
                    }}
                    animation="slide-up"
                    showSearch={false}
                    onChange={this.onChange}
                  >
                    {variants}
                  </Select>
                </SingleSelectWrapper>
              </PhoneQuantitySelectorWrapper>
              <AddToCartWrapper>
                <AddToCartButton
                  onClick={() =>
                    addVariantToCart(
                      'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC83MzIxNTI1MDI2ODY5',
                      1
                    )
                  }
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
