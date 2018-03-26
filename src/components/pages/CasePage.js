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

const ItemDetails = styled.div`
  height: 33vw;
  background-color: blue;
`;

const ItemDescription = styled.div`
  height: 10vw;
  width: 100%;
  background-color: red;
`;

const ItemTitle = styled.h1``;

class CasePage extends Component {
  state = {};

  componentDidMount = () => {
    console.log('test');
    const { match, getCase } = this.props;
    getCase(match.params.title);
  };

  render() {
    const { currentCase } = this.props;
    console.log("Current Case: ", currentCase);
    return (
      <RootContainer>
        <ItemWrapper>
          <ItemImageCarousel />
          <CaseImageWrapper>
            <CaseImage src={PhoneCase} />
          </CaseImageWrapper>
          <ItemDetails>
            <ItemDescription>
              <ItemTitle>{currentCase.title}</ItemTitle>
            </ItemDescription>
          </ItemDetails>
        </ItemWrapper>
      </RootContainer>
    );
  }
}

const mapStateToProps = state => ({
  currentCase: state.cases.currentCase,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCase
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CasePage)
);
