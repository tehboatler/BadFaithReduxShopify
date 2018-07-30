import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { injectIntl, FormattedNumber } from 'react-intl';

const CaseItemContainer = styled.div`
  width: 100%;
  // margin: 5% 0;
  height: auto;
  justify-self: center;
  margin: 1vw 0%;
  // border-radius: 1vw;
  //   background-color: #eee;
  // -webkit-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.14);
  // -moz-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.14);
  // box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.14);

  @media (max-width: 415px) {
    overflow: hidden;
  }
`;
const CaseImageWrapper = styled.div`
  position: relative;
  // background-color: #222;
  height: 13.25vw;
  width: 13.25vw;

  @media (max-width: 415px) {
    height: 50vw;
    width: 100%;
  }
`;

const TagsWrapper = styled.div`
  position: absolute;
  opacity: 0.5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  text-align: center;

`;

const ProductTag = styled.h1`
  margin: 40% 0;
  height: 20%;
  font-size: 1.75em;
  padding: 0.5vw 2vw;
  color: white;
  background-color: black;
  font-weight: 800;
`;

const DescriptionWrapper = styled.div`
  text-align: center;
  height: 10vw;
  width: 100%;
  // background-color: #fff;
  // padding: 1vw 1vw 0vh 1vw;
  @media (max-width: 415px) {
    padding-top: 5vw;
    width: 100%;
    height: auto;
    text-align: center;
  }
`;

const CaseTitle = styled.h1`
  color: #111;
  margin: 2vw;
  margin-bottom: 0;
  font-family: 'Roboto Condensed', cursive;
  font-size: 3vw;
  font-weight: 500;
  // line-height: 0;
  padding-top: 0.5vw;
  color: #131313;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PriceText = styled.h1`
  color: #111;
  margin: 1vw;
  margin-top: 3vw;
  font-size: 2vw;
  font-family: 'Roboto Condensed', cursive;
  font-weight: 800;

  @media (max-width: 415px) {
    font-size: 3vw;
    color: #111;
    margin-bottom: 3vw;
  }
`;
const CompareAtPrice = styled.h1`
  color: red;
  margin: 1vw;
  padding-top: 1vw;
  font-size: 2vw;
  text-decoration: line-through;
  font-family: 'Gamja Flower', cursive;

  @media (max-width: 415px) {
    font-size: 5vw;
    color: red;
  }
`;

const CaseDesc = styled.h3`
  color: white;
  margin: 0;
`;

const CaseImage = styled.img`
  // position: absolute;
  mix-blend-mode: multiply;
  height: 100%;
  width: 100%;
`;

// Yotpo
// ============================================================
const ReviewsWidget = styled.div`
  display: flex;
  padding-top: 2vw;
  background-color: white;
  width: 100%;
  height: 3vw;
  text-align: center;
  justify-content: center;
`;

export default class ProductItem extends Component {
  state = {};

  componentDidMount() {
    const { price } = this.props;
    const convertedPrice = window.Currency.convert(price, 'AUD', 'USD');
    const roundedConvertedPrice = Math.round(convertedPrice * 100) / 100;
    this.setState({ convertedPrice: roundedConvertedPrice });
  }

  ReviewsStarRating = handle => {
    console.log('match: ', handle);
    var api = new Yotpo.API(yotpo);
    setTimeout(() => {
      api.refreshWidgets();
    }, 1000);
    return {
      __html: `<div
      class='yotpo bottomLine'
      data-product-id='${handle}'
      data-url=
      'http://starsigned.herokuapp.com/'
      
      />`
    };
  };

  render() {
    const {
      intl,
      title,
      handle,
      desc,
      id,
      image,
      pathString,
      price,
      compareAtPrice,
      tags
    } = this.props;
    const { convertedPrice } = this.state;
    return (
      <CaseItemContainer>
        <CaseImageWrapper>
          <Link to={`/${pathString}/${handle}`}>
            <CaseImage src={image} />
          </Link>
          {tags.length > 0 && (
            <TagsWrapper>
              {tags.map(ProductTags => {
                return <ProductTag>{ProductTags.value}</ProductTag>;
              })}
            </TagsWrapper>
          )}
        </CaseImageWrapper>
        <DescriptionWrapper>
          <CaseTitle>{title}</CaseTitle>
          {/* {convertedPrice && (
            <ReviewsWidget
              dangerouslySetInnerHTML={this.ReviewsStarRating(handle)}
            />
          )} */}
          <PriceWrapper>
            <PriceText>${convertedPrice} USD</PriceText>
          </PriceWrapper>
          <Link
            to={{
              pathname: `/${pathString}/${handle}`
            }}
          />
        </DescriptionWrapper>
      </CaseItemContainer>
    );
  }
}

// <FormattedNumber
//                 value={`${price}`}
//                 currency="AUD"
//                 currencyDisplay="symbol"
//                 style="currency"
//               />
