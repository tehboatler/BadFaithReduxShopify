import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

import { getCases } from '../../../actions/caseActions';
import CaseItem from '../CaseItem';

const Grid = styled.div`
  display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(650px, 1fr));
  grid-gap: 1em;
  background-color: #222;
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
        {cases.map(casesArray => (
          <CaseItem
            key={casesArray.id}
            id={casesArray.id}
            title={casesArray.title}
            desc={casesArray.description}
          />
        ))}
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
      getCases,
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CasesList)
);
