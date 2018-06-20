import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CaseItemContainer = styled.div`
  width: 100%;
  height: auto;
  justify-self: center;
  margin: 0.5vw 0;
  //   background-color: #eee;
  -webkit-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
  -moz-box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);
  box-shadow: 0px 4px 30px -9px rgba(54, 54, 54, 0.44);

  @media (max-width: 415px) {
    border-radius: 1.5vw;
    overflow: hidden;
  }
`;
const CaseImageWrapper = styled.div`
  // background-color: #222;
  height: 13.25vw;
  width: 13.25vw;

  @media (max-width: 415px) {
    height: 100vw;
    width: 100vw;
  }
`;

const DescriptionWrapper = styled.div`
  text-align: center;
  height: 7.5vw;
  width: 100%;
  background-color: #fff;
  // padding: 1vw 1vw 0vh 1vw;
  @media (max-width: 415px) {
    padding-top: 5vw;
    width: 100vw;
    height: 20vw;
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
    padding-top: 4vw;
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
  font-family: 'Gamja Flower', cursive;

  @media (max-width: 415px) {
    background-color: #eee;
    font-size: 5vw;
    color: #444;
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

const ProductItem = ({
  title,
  handle,
  desc,
  id,
  image,
  pathString,
  price,
  compareAtPrice
}) => {
  return (
    <CaseItemContainer>
      <CaseImageWrapper>
        <Link to={`/${pathString}/${handle}`}>
          <CaseImage src={image} />
        </Link>
      </CaseImageWrapper>
      <DescriptionWrapper>
        <CaseTitle>{title}</CaseTitle>
        <PriceWrapper>
          <Price>${price} USD</Price>
          
        </PriceWrapper>
        <Link to={`/${pathString}/${handle}`} />
      </DescriptionWrapper>
    </CaseItemContainer>
  );
};

export default ProductItem;
