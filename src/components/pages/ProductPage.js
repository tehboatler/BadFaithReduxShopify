import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { Spring } from 'react-spring';
import ReactPixel from 'react-facebook-pixel';
import { injectIntl, FormattedNumber } from 'react-intl';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';
import Countdown from 'react-countdown-now';
import Fade from 'react-reveal/Fade';

import './accordion.css';
import VariantSelector from '../VariantSelector';
import CollectionListHeader from '../Header';
import IntroBanner from '../IntroBanner';
import './yotpo.css';

import {
  getProduct,
  getSelectedVariantByID
} from '../../../reducers/productReducers';

import TrustBadge from '../../img/Trust_Badge_2.png';
import TrustBadge2 from '../../img/Trust_Badge_1.png';

// ============================================================
// Styles Start
// ============================================================
const RootContainer = styled.div`
  @media (max-width: 415px) {
    padding-top: 24vw;
  }
`;

const ProductCardWrapper = styled.div`
  background-color: #fff;
  text-align: left;
  width: 99%;
  height: auto;
  padding-bottom: 5vw;
  // border: solid 1px #ccc;
  // border-bottom: solid 3px #ddd;
  // border-radius: 5px;
  overflow: hidden;
  margin: 0 0.5%;
  -webkit-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.21);
`;

// Go Back Button
// ============================================================

const BackButton = styled.div`
  display: absolute;
  height: auto;
  width: 100%;
  background-color: #eee;
`;

const BackButtonText = styled.h1`
  display: inline-block;
  font-family: 'Roboto Condensed', Arial, Helvetica;
  font-size: 4vw;
  color: white;
  background-color: black;
  padding: 2vw;
  border-top-left-radius: 0.5vw;
  border-bottom-right-radius: 0.5vw;
`;

// Promo Banner
// ============================================================

const PromoBannerWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
`;

const PromoBanner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  height: 10vw;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 1vw;
  background-color: #f5f5f5;
`;

const PromoBannerText = styled.h1`
  font-family: 'Archivo Black', Arial;
  align-self: flex-end;
  font-size: 2vw;
  padding-right: 3vw;
  color: black;
`;

// Title, Price and Description
// ============================================================

const Title = styled.h1`
  color: #111;
  font-family: 'Roboto Condensed', cursive;
  @media (max-width: 415px) {
    background-color: #fff;
    width: auto;
    font-size: 5.5vw;
    font-weight: 400;
    padding: 3vw;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 1vw;
    margin-left: 2vw;
    // -webkit-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.07);
    // -moz-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.07);
    // box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.07);
  }
`;

const Price = styled.h1`
  color: #131313;
  font-family: 'Roboto Condensed', cursive;
  @media (max-width: 415px) {
    width: auto;
    font-size: 6vw;
    font-weight: 700;
    padding: 3vw;
    margin-left: 2vw;
    -webkit-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.07);
    border-radius: 2vw;
    margin-bottom: 0vw;
  }
`;

const FreeShippingTag = styled.h1`
  float: right;
  color: #fff;
  font-family: 'Roboto Condensed', cursive;
  font-size: 3vw;
  font-weight: 700;
  padding: 1vw;
  border-radius: 1vw;
  margin-left: 2vw;

  background-color: #eb5757;
`;

const Description = styled.h1`
  font-family: 'Roboto', cursive;
  font-weight: 500;
  color: #bcbcbc;
  margin-top: 0.5vw;
  font-size: 4vw;
  padding: 0 3vw;
  color: #333;
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
  @media (max-width: 415px) {
    height: auto;
    align-items: flex-start;
    justify-content: center;
  }
`;

const AddToCartButton = styled.button`
  width: 90%;
  height: 3vw;
  background-color: #131313;
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
  margin-top: 5vw;
  height: 18.62vw;
  width: 90vw;
  background-image: url(${TrustBadge});
  background-size: contain;
`;
const TrustBadgeWrapper2 = styled.div`
  height: 20.57vw;
  width: 75vw;
  margin: 1vw 5vw;
  margin-top: 3vw;
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
  padding-left: 5vw;
  padding-top: 1vw;
  height: 3vw;
`;

// Accordion
// ============================================================
const AccordionWrapper = styled.div`
  width: 95%;
  margin: 2.5%;
  height: auto;
`;

const ItemTitle = styled.h1`
  font-size: 3.5vw;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-weight: 700;
  color: black;
`;
const ItemDesc = styled.h1`
  font-size: 4vw;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: black;
`;

const CouponCountdown = styled.div`
  width: 90%;
  height: auto;
  text-align: center;
  background-color: #19b420;
  margin: 1% 5%;
  padding: 0.5vw 0;
  border-radius: 1vw;
`;

const CouponCountdownPrompt = styled.h1`
  font-family: 'Roboto Condensed', Helvetica, Arial;
  font-size: 3vw;
  color: white;
`;

// Feature Blurb
// ============================================================

const FeatureBlurb = styled.div`
  width: 90%;
  margin: 0 5%;
  margin-top: 3vw;
  background-color: white;
  height: auto;
`;

const FeatureBlurbHeading = styled.h1`
  font-family: 'Archivo Black', Helvetica, Arial;
  font-size: 5vw;
  color: black;
  margin: 0;
  padding: 2vw;
`;

const FeatureBlurbSubText = styled.h1`
  font-family: 'Roboto Condensed', Helvetica, Arial;
  font-size: 4vw;
  color: black;
  margin: 0;
  padding: 2vw 10vw;
`;

const CountdownPrice = styled.h1`
  margin-left: 1vw;
  text-decoration: line-through;
  color: red;
  display: inline-block;
  font-size: 3vw;
`;

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed, product, price }) => {
  if (
    completed ||
    (product !== 'Sterling Silver Finger Charm' &&
      product !== 'Sterling Zodiac Constellation Choker')
  ) {
    // Render a complete state
    return <div />;
  } else {
    // Render a countdown
    return (
      <div style={{ width: '100%' }}>
        <CouponCountdown>
          <CouponCountdownPrompt>
            @zodiacguides Coupon on this item valid for the next: {hours}h:{
              minutes
            }m:{seconds}s
          </CouponCountdownPrompt>
        </CouponCountdown>
        <div style={{ marginLeft: '5vw' }}>
          <FormattedNumber
            style={{ color: 'white' }}
            value={`${price * 0.75}`}
            currency="USD"
            currencyDisplay="symbol"
            style="currency"
          />{' '}
          USD
          <CountdownPrice>${price} USD</CountdownPrice>
        </div>
      </div>
    );
  }
};

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
    ReactPixel.pageView();
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
    const { product, match, selectedVariant } = this.props;
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
    const { product, addVariantToCart, selectedVariant, match } = this.props;
    const { variantImages, convertedPrice } = this.state;

    if (product) {
      console.log(product);
      return (
        <RootContainer>
          <CollectionListHeader />
          <Spring
            from={{ opacity: 0, height: '0vw' }}
            to={{ opacity: 1, height: '10vw' }}>
            {styles => (
              <PromoBannerWrapper style={styles}>
                <PromoBanner>
                  <PromoBannerText>
                    25% off on Gemini Items storewide! COUPON CODE: GEMINI25
                  </PromoBannerText>
                </PromoBanner>
              </PromoBannerWrapper>
            )}
          </Spring>

          <ImageGallery
            showFullscreenButton={false}
            showThumbnails={true}
            style={{ background: 'transparent' }}
            //   showNav={false}
            showPlayButton={false}
            items={variantImages}
          />

          <ProductCardWrapper>
            <Title>{product.title}</Title>
            {convertedPrice && (
              <ReviewsStarRating
                dangerouslySetInnerHTML={this.ReviewsStarRating()}
              />
            )}
            {convertedPrice && (
              <Price>
                <FormattedNumber
                  value={`${convertedPrice}`}
                  currency="USD"
                  currencyDisplay="symbol"
                  style="currency"
                />{' '}
                USD
                <FreeShippingTag>Free Shipping</FreeShippingTag>{' '}
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
              <Countdown
                product={product.title}
                price={convertedPrice}
                date={'Sat, 16 July 2018 07:00:00'}
                intervalDelay={0}
                daysInHours={true}
                precision={1000}
                renderer={renderer}
              />
              <TrustBadgeWrapper />

              <AccordionWrapper>
                <Accordion>
                  <AccordionItem expanded style={{ overflow: 'hidden' }}>
                    <AccordionItemTitle style={{ backgroundColor: '#f9f9f9' }}>
                      <ItemTitle>🌐 Description</ItemTitle>
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

                <Accordion style={{ marginTop: '1.5vw' }}>
                  <AccordionItem expanded style={{ overflow: 'hidden' }}>
                    <AccordionItemTitle style={{ backgroundColor: '$f8f8f8' }}>
                      <ItemTitle>❗️ Shipping & Delivery</ItemTitle>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <ItemDesc>
                        Once your order is placed, there is a 3-5 business day
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
                        Please contact us at: support@starsignedstyle.com if you
                        have any questions for us.
                      </ItemDesc>
                      <TrustBadgeWrapper2 />
                    </AccordionItemBody>
                  </AccordionItem>
                </Accordion>

                <Accordion style={{ marginTop: '1.5vw' }}>
                  <AccordionItem style={{ overflow: 'hidden' }}>
                    <AccordionItemTitle style={{ backgroundColor: '$f8f8f8' }}>
                      <ItemTitle>💛 A Thank You from StarSigned</ItemTitle>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <FeatureBlurbHeading>
                        A Thank You from StarSigned:
                      </FeatureBlurbHeading>
                      <Fade bottom>
                        <FeatureBlurbSubText>
                          Established June of 2018, we are a small
                          hole-in-the-wall collection of the best astrological
                          charms and trinkets you didn’t know could be this
                          cute.
                        </FeatureBlurbSubText>
                      </Fade>
                      <Fade bottom>
                        <FeatureBlurbSubText>
                          Our horoscopes told us great things were in the stars
                          for us.
                        </FeatureBlurbSubText>
                      </Fade>
                      <Fade bottom>
                        <FeatureBlurbSubText>
                          So we made StarSigned to send you keepsakes that might
                          remind you that great things are in the stars for you
                          too.
                        </FeatureBlurbSubText>
                      </Fade>
                      <Fade bottom>
                        <FeatureBlurbSubText>
                          Thank you for supporting the StarSigned revolution :)
                        </FeatureBlurbSubText>
                      </Fade>
                    </AccordionItemBody>
                  </AccordionItem>
                </Accordion>
              </AccordionWrapper>
            </VariantSelectorAndCartWrapper>
          </ProductCardWrapper>

          <ReviewsWidget dangerouslySetInnerHTML={this.ReviewsWidget()} />
          <CollectionListHeader />
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
  )(ProductPage)
);
