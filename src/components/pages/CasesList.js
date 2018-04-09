import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

import {
  getCases,
  getSimpleCases,
} from '../../../actions/caseActions';
import CaseItem from '../CaseItem';

const RootGrid = styled.div`
  width: 100%;
  padding: 5vw 0 0 0;
  display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(1, 1fr);
  background-color: #fff;
  grid-gap: 1vw;
  @media (max-width: 415px) {
    padding: 20vw 0 0 0;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Grid = styled.div`
  width: 65%;
  justify-self: center;
  display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
  background-color: #fff;
  grid-gap: 1vw;
  @media (max-width: 415px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20vw 0 0 0;
  height: 10vw;
  width: 100%;
`;
const LoadingText = styled.h1`
  font-family: 'Patua One', cursive;
  color: #222;
  font-size: 3vw;
`;

const CaseTypeToggle = styled.div`
  background-color: red;
  height: 10vh;
  width: 100%;
`;

const SimpleCaseButton = styled.button`
  background-color: black;
  width: 50%;
  height: 100%;
`;

class CasesList extends Component {
  componentDidMount() {
    const { getCases, getSimpleCases } = this.props;
    getCases();
    getSimpleCases();
  }

  render() {
    const { cases, getSimpleCases, getCases, simplecases } = this.props;

    console.log('State Access: ', cases);
    if (cases === null || cases.length === 0) {
      return (
        <Loading>
          <LoadingText>Loading...</LoadingText>
        </Loading>
      );
    } else {
      return (
        <div>
        <RootGrid>
        <Grid>
        {cases.map(casesArray => {
          let image = casesArray.images[0];
          return (
            <CaseItem
            key={casesArray.id}
            id={casesArray.id}
            title={casesArray.title}
            desc={casesArray.description}
            image={image}
            />
          );
        })}
        </Grid>
        <Grid>
        {simplecases && simplecases.map(casesArray => {
          let image = casesArray.images[0];
          return (
            <CaseItem
            key={casesArray.id}
            id={casesArray.id}
            title={casesArray.title}
            desc={casesArray.description}
            image={image}
            />
          );
        })}
        </Grid>
        </RootGrid>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  cases: state.cases.cases,
  simplecases: state.cases.simplecases
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCases,
      getSimpleCases,
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CasesList)
);
