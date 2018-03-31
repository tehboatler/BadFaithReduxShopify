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
  grid-template-columns: repeat(4,1fr);
  background-color: #FFF;
  grid-gap: 1vw;
  @media (max-width: 415px) {
    grid-template-columns: repeat(2,1fr);
  }
`;



class CasesList extends Component {
  componentDidMount() {
    const { getCases } = this.props;
    getCases();
  }

  render() {
    const { cases } = this.props;
    console.log('State Access: ', cases);
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
