import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const CaseItemContainer = styled.div`
  position: relative;
  width: 100%;
  //   border-radius: 0.25vw;
  height: auto;
  justify-self: center;
  margin: 0vw 0vw;
  border-radius: 0.25vw;
  //   background-color: #eee;
  -webkit-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.14);
  -moz-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.14);
  box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.14);
  overflow: hidden;
`;
const CaseImageWrapper = styled.div`
  @media (max-width: 415px) {
    height: auto;
    width: 100%;
  }
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  height: 10vw;
  opacity: 1;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.16) 16%,
    rgba(0, 0, 0, 0.35) 35%,
    rgba(0, 0, 0, 0.58) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(16%, rgba(0, 0, 0, 0.16)),
    color-stop(35%, rgba(0, 0, 0, 0.35)),
    color-stop(58%, rgba(0, 0, 0, 0.58)),
    color-stop(100%, rgba(0, 0, 0, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.16) 16%,
    rgba(0, 0, 0, 0.35) 35%,
    rgba(0, 0, 0, 0.58) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.16) 16%,
    rgba(0, 0, 0, 0.35) 35%,
    rgba(0, 0, 0, 0.58) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.16) 16%,
    rgba(0, 0, 0, 0.35) 35%,
    rgba(0, 0, 0, 0.58) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.16) 16%,
    rgba(0, 0, 0, 0.35) 35%,
    rgba(0, 0, 0, 0.58) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=0 );
`;

const CaseTitle = styled.h1`
  color: white;
  margin: 1vw;
  margin-bottom: 0.5vw;
  padding-top: 2vw;
  font-size: 1vw;
  font-family: 'Roboto Condensed', cursive;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Price = styled.h1`
  color: white;
  margin: 1vw;
  font-size: 1vw;
  font-family: 'Roboto Condensed', cursive;
  font-weight: 800;
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
  padding-top: 0vw;
  background-color: #fff;
  border-radius: 1vw;
  width: 40%;
  padding: 1% 0;
  margin: 0 30%;
  opacity: 0.9;
  text-align: center;
  justify-content: center;
`;

export default class DesktopProductItem extends Component {
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
      title,
      handle,
      desc,
      id,
      image,
      pathString,
      price,
      compareAtPrice
    } = this.props;
        const { convertedPrice } = this.state;
    return (
      <CaseItemContainer>
        <CaseImageWrapper>
          <Link to={`/${pathString}/${handle}`}>
            <CaseImage src={image} />
          </Link>
        </CaseImageWrapper>

        <DescriptionWrapper>
          <Fade cascade>
            <CaseTitle>{title}</CaseTitle>
            <ReviewsWidget
              dangerouslySetInnerHTML={this.ReviewsStarRating(handle)}
            />
            <PriceWrapper>
              <Price>${convertedPrice} USD</Price>
            </PriceWrapper>
            <Link to={`/${pathString}/${handle}`} />
          </Fade>
        </DescriptionWrapper>
        {console.log('Product Item Last Render~')}
      </CaseItemContainer>
    );
  }
}
