import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { gql } from 'babel-plugin-graphql-js-client-transform';

import Nav from '../Nav';
import CasesList from './CasesList';
import Header from '../Header';
import Cart from './Cart';
import CasePage from './CasePage';

const RootContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
`;

export default class Main extends Component {
  state = { shop: '' };

  componentWillMount() {
    const client = this.props.client;
    client
      .send(
        gql(client)`
        query {
          shop {
            name
            description
            products(first:20) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  title
                  description
                  options {
                    name
                    values
                  }
                  variants(first: 250) {
                    pageInfo {
                      hasNextPage
                      hasPreviousPage
                    }
                    edges {
                      node {
                        title
                        selectedOptions {
                          name
                          value
                        }
                        image {
                          src
                        }
                        price
                      }
                    }
                  }
                  images(first: 250) {
                    pageInfo {
                      hasNextPage
                      hasPreviousPage
                    }
                    edges {
                      node {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `
      )
      .then(res => {
        this.setState({
          shop: res.model.shop,
          products: res.model.shop.products
        });
      });
  }

  render() {
    const { shop, products } = this.state;
    return (
      <Router>
        <RootContainer>
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/" component={CasesList} />
            <Route
              path="/starsigned/:title"
              render={() => <CasePage productlist={products} />}
            />

            <Route path="/cart" component={Cart} />
          </Switch>
        </RootContainer>
      </Router>
    );
  }
}
