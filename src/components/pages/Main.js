import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { gql } from 'babel-plugin-graphql-js-client-transform';

import Nav from '../Nav';
import CasesList from './CasesList';
import Header from '../Header';
import Cart from './Cart';
import CasePage from './CasePage';
import StarSignedFeatured from './StarsignedFeatured';

const RootContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
`;

export default class Main extends Component {
  state = { shop: '', checkout: [], isCartOpen: false };
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const client = this.props.client;

    // ============================================================
    // Fetch Cart
    // ============================================================
    client
      .send(
        gql(client)`
    mutation {
      checkoutCreate(input: {}) {
        userErrors {
          message
          field
        }
        checkout {
          id
          webUrl
          subtotalPrice
          totalTax
          totalPrice
          lineItems (first:250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                title
                variant {
                  title
                  image {
                    src
                  }
                  price
                }
                quantity
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
          checkout: res.model.checkoutCreate.checkout
        });
      });

    // ============================================================
    // Fetch Products
    // ============================================================
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
                        id
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

  // ============================================================
  // Add Item Variant to Cart
  // ============================================================

  addVariantToCart(variantId, quantity) {
    const { client } = this.props;
    this.setState({
      isCartOpen: true
    });

    const lineItems = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = this.state.checkout.id;

    return client
      .send(
        gql(client)`
  mutation ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        webUrl
        subtotalPrice
        totalTax
        totalPrice
        lineItems (first:250) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              title
              variant {
                title
                image {
                  src
                }
                price
              }
              quantity
            }
          }
        }
      }
    }
  }
`,
        { checkoutId, lineItems }
      )
      .then(res => {
        this.setState({
          checkout: res.model.checkoutLineItemsAdd.checkout
        });
      });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const { client } = this.props;
    const checkoutId = this.state.checkout.id;
    const lineItems = [{ id: lineItemId, quantity: parseInt(quantity, 10) }];

    return client
      .send(
        gql(client)`
      mutation ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
        checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
          userErrors {
            message
            field
          }
          checkout {
            webUrl
            subtotalPrice
            totalTax
            totalPrice
            lineItems (first:250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  title
                  variant {
                    title
                    image {
                      src
                    }
                    price
                  }
                  quantity
                }
              }
            }
          }
        }
      }
    `,
        { checkoutId, lineItems }
      )
      .then(res => {
        this.setState({
          checkout: res.model.checkoutLineItemsUpdate.checkout
        });
      });
  }

  removeLineItemInCart(lineItemId) {
    const { client } = this.props;
    const checkoutId = this.state.checkout.id;

    return client
      .send(
        gql(client)`
      mutation ($checkoutId: ID!, $lineItemIds: [ID!]!) {
        checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
          userErrors {
            message
            field
          }
          checkout {
            webUrl
            subtotalPrice
            totalTax
            totalPrice
            lineItems (first:250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  title
                  variant {
                    title
                    image {
                      src
                    }
                    price
                  }
                  quantity
                }
              }
            }
          }
        }
      }
    `,
        { checkoutId, lineItemIds: [lineItemId] }
      )
      .then(res => {
        this.setState({
          checkout: res.model.checkoutLineItemsRemove.checkout
        });
      });
  }

  render() {
    const { shop, products, checkout } = this.state;
    return (
      <Router>
        <RootContainer>
          <Nav
            checkout={checkout}
            updateQuantityInCart={this.updateQuantityInCart.bind(this)}
            removeLineItemInCart={this.removeLineItemInCart.bind(this)}
          />
          <Header />
          {/*<Route path="/" component={StarSignedFeatured} />*/}
          <Switch>
            <Route exact path="/" component={CasesList} />
            <Route
              path="/starsigned/:title"
              render={props => (
                <CasePage
                  productlist={products}
                  addVariantToCart={this.addVariantToCart.bind(this)}
                  {...props}
                />
              )}
            />
          </Switch>
        </RootContainer>
      </Router>
    );
  }
}
