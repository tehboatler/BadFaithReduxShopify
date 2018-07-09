import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { Spring } from 'react-spring';
import Fade from 'react-reveal/Fade';
import { injectIntl, FormattedNumber } from 'react-intl';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody
  } from 'react-accessible-accordion';

import VariantSelector from '../../VariantSelector';
import DesktopHeader from '../DesktopHeader';
import DesktopPromoBanner from '../DesktopPromoBanner';

import {
  getProduct,
  getSelectedVariantByID
} from '../../../../reducers/productReducers';

import TrustBadge from '../../../img/Trust_Badge_2.png';
import TrustBadge2 from '../../../img/Trust_Badge_1.png';

// ============================================================
// Styles Start
// ============================================================
const RootContainer = styled.div`
  width: 65%;
  margin: 0 17.5%;
  padding-top: 8vw;
`;

const ProductCardWrapper = styled.div`
  background-color: #fff;
  text-align: left;
  width: 25vw;
  height: auto;
  padding-bottom: 5vw;
  padding: 0 1vw;
  // border: solid 1px #ccc;
  border-bottom: solid 3px #ddd;
  //   border-radius: 5px;
  //   background-color: red;
  //   overflow: hidden;
  margin: 0 0.5%;
  //   -webkit-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.21);
  //   -moz-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.21);
  //   box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.21);
`;

const Grid = styled.div`
  width: 75vw;
  display: grid;
  grid-template-columns: repeat(2, 38vw 25vw);
  grid-gap: 1vw;
`;

const ImageGalleryWrapper = styled.div`
  height: auto;
  width: 100%;
`;

// Title, Price and Description
// ============================================================

const Title = styled.h1`
  color: #111;
  font-family: 'Roboto Condensed', cursive;
  font-size: 1vw;
  padding-left: 0.5vw;
`;

const Price = styled.h1`
  padding-left: 0.5vw;
  color: #131313;
  font-family: 'Roboto Condensed', cursive;
  font-size: 1vw;
`;

const Description = styled.h1`
  font-family: 'Roboto', cursive;
  font-size: 0.85vw;
  font-weight: 500;
  color: black;
  margin-top: 0.5vw;
  padding: 1vw;
`;

//  VariantSelector Wrapper
// ============================================================
const VariantSelectorAndCartWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1vw 0;
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
  background-color: #fff;
  justify-content: center;
  @media (max-width: 415px) {
    height: auto;
    padding-bottom: 3vh;
    align-items: flex-start;
  }
`;

const AddToCartButton = styled.button`
  width: 90%;
  height: 3vw;
  background-color: #131313;
  border: none;
  border-radius: 0.2vw;
`;

const AddToCartText = styled.h1`
  color: white;
  font-size: 0.7vw;
`;

// Trust Badge Image
// ============================================================
const TrustBadgeWrapper = styled.div`
  height: 4.44vw;
  width: 25vw;
  background-image: url(${TrustBadge});
  background-size: contain;
`;

const TrustBadgeWrapper2 = styled.div`
  height: 5.5vw;
  width: 20vw;
//   margin: 1vw 5vw;
//   margin-top: 3vw;
  background-image: url(${TrustBadge2});
  background-size: contain;
`;

const Loading = styled.div`
  height: 20vh;
  width: 100%;
  background-color: white;
`;

// Yotpo Reviews Widget
// ============================================================
const ReviewsWidget = styled.div`
  background-color: white;
  width: 100%;
`;

const ReviewsStarRating = styled.div`
  padding-left: 0.5vw;
  padding-top: 0.25vw;
`;

// Accordion
// ============================================================
const AccordionWrapper = styled.div`
width: 100%;
height: auto;
  
`

const ItemTitle = styled.h1`
  font-size: 1vw;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-weight: 700;
  color: black;
`;
const ItemDesc = styled.h1`
  font-size: 0.7vw;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: black;
`;

export class DesktopProductPage extends Component {
  state = { selectedOptions: [] };

  // ============================================================
  // Methods
  // ============================================================

  componentWillMount = () => {
    const { getProduct, match, product } = this.props;
    getProduct(match.params.handle);
  };

  componentWillReceiveProps(nextProps) {
    const { product, selectedVariant } = this.props;
    let arr = [];
    if (product) {
      const variantImages = product.images.map((image, index) => {
        return (arr[index] = {
          original: `${image.originalSrc}`,
          thumbnail: `${image.originalSrc}`,
          originalClass: `image_styles`
        });
      });

      this.setState(
        {
          variantImages: arr
        },
        () => {
          const { price } = this.props.selectedVariant;
          const convertedPrice = window.Currency.convert(price, 'AUD', 'USD');
          const roundedConvertedPrice = Math.round(convertedPrice * 100) / 100;

          this.setState({ convertedPrice: roundedConvertedPrice }, () => {
            var api = new Yotpo.API(yotpo);
            setTimeout(() => {
              api.refreshWidgets();
            }, 1000);
          });
        }
      );
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  ReviewsStarRating = () => {
    const { product, match } = this.props;
    console.log('match: ', match.params.handle);
    return {
      __html: `<div
      class='yotpo bottomLine'
      data-product-id='${match.params.handle}'
      data-url=
      'http://starsigned.herokuapp.com/'
      
      />`
    };
  };

  ReviewsWidget = () => {
    const { product, match } = this.props;
    return {
      __html: `<div
        class='yotpo yotpo-main-widget'
        data-product-id='${match.params.handle}'
        data-price='30'
        data-currency='USD'
        data-name='${product.name}'
        data-url=
          'http://starsigned.herokuapp.com/'
        
        data-image-url='The product image url. Url escaped'
        data-description='${product.description}'
      />`
    };
  };

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
    const { variantImages, convertedPrice } = this.state;
    if (product) {
      console.log(product);
      return (
        <RootContainer>
          <Grid>
            <ImageGalleryWrapper>
              <ImageGallery
                showFullscreenButton={false}
                showThumbnails={true}
                style={{ background: 'transparent' }}
                //   showNav={false}
                showPlayButton={false}
                items={variantImages}
              />
            </ImageGalleryWrapper>

            <ProductCardWrapper>
              <Title>{product.title}</Title>
              <ReviewsStarRating
                dangerouslySetInnerHTML={this.ReviewsStarRating()}
              />
              {convertedPrice && (
                <Price>
                  <FormattedNumber
                    value={`${convertedPrice}`}
                    currency="USD"
                    currencyDisplay="symbol"
                    style="currency"
                  />{' '}
                  USD
                </Price>
              )}
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
                    onClick={() =>
                      addVariantToCart(
                        selectedVariant.id,
                        1,
                        product.title,
                        convertedPrice
                      )
                    }>
                    <AddToCartText>Add To Cart</AddToCartText>
                  </AddToCartButton>
                </AddToCartWrapper>
                <TrustBadgeWrapper />

                <AccordionWrapper>
                  <Accordion>
                    <AccordionItem expanded>
                      <AccordionItemTitle>
                        <ItemTitle>Description</ItemTitle>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <ItemDesc>
                          <Description
                            dangerouslySetInnerHTML={{
                              __html: product.descriptionHtml
                            }}
                          />
                        </ItemDesc>
                      </AccordionItemBody>
                    </AccordionItem>
                  </Accordion>
                  <Accordion>
                    <AccordionItem expanded>
                      <AccordionItemTitle>
                        <ItemTitle>Shipping & Delivery</ItemTitle>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <ItemDesc>
                          Once your order is placed, there is a 1 business day
                          processing period, followed by a 10-20 business day
                          shipping period.
                        </ItemDesc>
                        <ItemDesc>
                          Please take this into account when purchasing from our
                          website. Allow 2-3 weeks (depending on location) for
                          your shipment to arrive.
                        </ItemDesc>
                        <ItemDesc>
                          For international shipping outside the US, orders may
                          take 4-6 weeks to arrive.
                        </ItemDesc>
                        <ItemDesc>
                          Please contact us at: support@starsignedstyle.com if
                          you have any questions for us.
                        </ItemDesc>
                      </AccordionItemBody>
                    </AccordionItem>
                  </Accordion>
                </AccordionWrapper>
              </VariantSelectorAndCartWrapper>
              <TrustBadgeWrapper2 />
            </ProductCardWrapper>
          </Grid>

          <ReviewsWidget dangerouslySetInnerHTML={this.ReviewsWidget()} />
          <DesktopHeader />
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DesktopProductPage)
);
