import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Nav from '../Nav';
import CasesList from './CasesList';
import Header from '../Header';
import Cart from './Cart';

const RootContainer = styled.div``;

const Main = () => {
  return (
    <Router>
      <RootContainer>
        <Nav />
        <Header />
        <Switch>
        <Route exact path="/" component={CasesList} />
        <Route path="/starsigned/:title" component={Test} />
        <Route path="/cart" component={Cart} />
        </Switch>
      </RootContainer>
    </Router>
  );
};

const Test = ({match}) => {
  return <h1>{match.params.title}</h1>;
};

export default Main;
