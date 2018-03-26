import React, { Component } from 'react';
import styled from 'styled-components';

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
  background-color: #333;
  display: grid;
  grid-template-columns: 1fr 4fr 5fr;
//   grid-gap: 1em;
`;

const ItemImageCarousel = styled.div`
width: 100%;
height: 33vw;
background-color: red;
`;

const CaseImageWrapper = styled.div`
  position: relative;
  justify-self: center;
  align-self: center;
  background-color: #222;
  height: 35.5vw;
  width: 20vw;
`;

const CaseImage = styled.img`
  height: 100%;
  width: 100%;
`;

const ItemDescription = styled.div`
  height: 33vw;
  background-color: blue;
`

export default class CasePage extends Component {
  state = {};
  render() {

        const { title } = this.props;
    return (
      <RootContainer>
        <ItemWrapper>
            <ItemImageCarousel/>
            <CaseImageWrapper>
                <CaseImage src={PhoneCase}/>
            </CaseImageWrapper>            
            <ItemDescription/>
        </ItemWrapper>
      </RootContainer>
    );
  }
}
