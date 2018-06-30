import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CaseItemContainer = styled.div`
  width: 100%;
  // margin: 5% 0;
  height: auto;
  justify-self: center;
  margin: 2.5vw 0vw;
  border-radius: 1vw;
  //   background-color: #eee;
  -webkit-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.14);
  -moz-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.14);
  box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.14);

  @media (max-width: 415px) {
    overflow: hidden;
  }
`;
const CaseImageWrapper = styled.div`
  // background-color: #222;
  height: 13.25vw;
  width: 13.25vw;

  @media (max-width: 415px) {
    height: 90vw;
    width: 100%;
  }
`;

const DescriptionWrapper = styled.div`
  text-align: center;
  height: 10vw;
  width: 100%;
  background-color: #fff;
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
  margin: 1vw;
  padding-top: 5vw;
  font-size: 1vw;
  font-family: 'Roboto Condensed', cursive;

  @media (max-width: 415px) {
    font-size: 4vw;
    font-weight: 700;
    line-height: 0;
    padding-top: 1vw;
    color: #131313;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Price = styled.h1`
  color: #111;
  margin: 1vw;
  margin-top: 3vw;
  font-size: 2vw;
  font-family: 'Roboto Condensed', cursive;
  font-weight: 800;

  @media (max-width: 415px) {
    font-size: 4vw;
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
  text-align: center;
  justify-content: center;
`;

export default class ProductItem extends Component {
  state = {};

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
    return (
      <CaseItemContainer>
        <CaseImageWrapper>
          <Link to={`/${pathString}/${handle}`}>
            <CaseImage src={image} />
          </Link>
        </CaseImageWrapper>
        <DescriptionWrapper>
          <CaseTitle>{title}</CaseTitle>
          <ReviewsWidget
            dangerouslySetInnerHTML={this.ReviewsStarRating(handle)}
          />
          <PriceWrapper>
            <Price>${price} USD</Price>
          </PriceWrapper>
          <Link to={`/${pathString}/${handle}`} />
        </DescriptionWrapper>
        {yotpo.initWidgets()}
      </CaseItemContainer>
    );
  }
}
