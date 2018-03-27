import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { getCase } from '../../../actions/caseActions';

import PhoneCase from '../../img/BadFaithHeaderPhone.png';

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #222;
`;

const ItemWrapper = styled.div`
  width: 50vw;
  height: 33vw;
//   background-color: #333;
  display: grid;
  grid-template-columns: 2fr 4fr 5fr;
    grid-gap: 1em;
`;

const ItemImageCarousel = styled.div`
  width: 100%;
  height: 33vw;
  background-color: #111;
`;

const CaseImageWrapper = styled.div`
  position: relative;
  justify-self: center;
  align-self: center;
//   background-color: #222;
  height: 35.5vw;
  width: 20vw;
`;

const CaseImage = styled.img`
  height: 100%;
  width: 100%;
`;

const ItemDetails = styled.div`
  height: 33vw;
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
font-size: 6vw;
color: white;
margin: 0;
`;

const ItemTagline = styled.h1`
// background-color: black;
font-size: 1.1vw;
font-weight: 300;
color: white;
  margin: 0;
`;

const ItemCheckoutDetail = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
height: 20vw;
width: 100%;
// background-color: grey;
`

const PhoneVariantSelectorWrapper = styled.div`
height: 7.5vw;
width:100%;
background-color: #333;
`
const PhoneQuantitySelectorWrapper = styled.div`
height: 7.5vw;
width:100%;
background-color: #333;
`

const AddToCartWrapper = styled.div`
display: flex;
align-items: flex-end;
height: 5vw;
width:100%;
// background-color: #111;
`

const AddToCartButton = styled.button`
    width: 66%;
    height: 4vw;
    background-color: red;
    border: none;
    border-radius: 0.2vw;
`

const AddToCartButtonText = styled.h1`
    color: white;
    font-size: 1.1vw;
`

class CasePage extends Component {
  state = {checkout: []};

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

    // const { match, getCase } = this.props;
    // getCase(match.params.title);
  };

  //   componentDidMount = () => {
  // const { currentCase } = this.props;
  // console.log('Current Case CDM: ', currentCase[0]);
  //   };

  //   componentWillReceiveProps(nextProps) {
  //     console.log(nextProps.currentCase[0].title);
  //     this.setState({ loading: false });
  //   }

  render() {
    // const { currentCase } = this.props;
    const { currentCaseParams } = this.state;
        const { addVariantToCart } = this.props;
    // const { match } = this.props;
    return (
      <RootContainer>
        <ItemWrapper>
          <ItemImageCarousel />
          <CaseImageWrapper>
            <CaseImage src={PhoneCase} />
          </CaseImageWrapper>
          <ItemDetails>
            <ItemDescription>
              <ItemTitle>{currentCaseParams.title}</ItemTitle>
              <ItemTagline>{currentCaseParams.description}</ItemTagline>
              </ItemDescription>
              <ItemCheckoutDetail>
                <PhoneVariantSelectorWrapper/>
                <PhoneQuantitySelectorWrapper/>
                <AddToCartWrapper>
                    <AddToCartButton onClick={() => addVariantToCart("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC83MzIxNTI1MDI2ODY5", 1)}>
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
