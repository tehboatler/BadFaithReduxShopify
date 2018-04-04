import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

import { getCases } from '../../../actions/caseActions';
import CaseItem from '../CaseItem';

const Grid = styled.div`
  width: 100%;
  display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
  background-color: #fff;
  grid-gap: 1vw;
  @media (max-width: 415px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 10vh;
  width: 100%;
`;
const LoadingText = styled.h1`
  font-family: 'Patua One', cursive;
  color: #222;
  font-size: 3vw;
`;

class CasesList extends Component {
  componentDidMount() {
    const { getCases } = this.props;
    getCases();
  }

  render() {
    const { cases } = this.props;
    console.log('State Access: ', cases);
    if ( cases === null || cases.length === 0) {
      return (
        <Loading>
          <LoadingText>Loading...</LoadingText>
        </Loading>
      );
    } else {
      return (
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
      );
    }
  }
}

const mapStateToProps = state => ({
  cases: state.cases.cases
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCases
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CasesList)
);
