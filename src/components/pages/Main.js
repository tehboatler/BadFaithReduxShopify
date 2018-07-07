import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { gql } from 'babel-plugin-graphql-js-client-transform';
import MediaQuery from 'react-responsive';
import ReactPixel from 'react-facebook-pixel';
import { IntlProvider } from 'react-intl';
import Cookie from 'js-cookie';

import Nav from '../Nav';
import DesktopNav from '../desktop/Nav';
import CollectionList from './CollectionList';
import DesktopCollectionList from '../desktop/pages/DesktopCollectionList';
import ProductPage from './ProductPage';
import DesktopProductPage from '../desktop/pages/DesktopProductPage';
import Header from '../Header';
import Featured from './Featured';
import DesktopFeatured from '../desktop/pages/Featured';
import Footer from '../Footer';
import DesktopFooter from '../desktop/DesktopFooter';
import SupportCenter from './SupportCenter';
import TermsOfUse from './TermsOfUse';
import RefundPolicy from './RefundPolicy';
import PrivacyPolicy from './PrivacyPolicy';
import ContactUs from './ContactUs';

const RootContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
`;

const LandscapeMobilePrompt = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #131313;
  z-index: 999;
  overflow: hidden;
`;

const LandscapeMobilePromptText = styled.h1`
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-size: 3vw;
  color: #333;
  background-color: #f2f2f2;
  padding: 1vw;
`;

const DesktopTest = styled.div`
  background-color: red;
  width: 100vw;
  height: 100vh;
`;

export default class Main extends Component {
  state = { shop: '', checkout: [], isCartOpen: false };
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const client = this.props.client;
    const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
    const options = {
      autoConfig: true, // set pixel's autoConfig
      debug: false // enable logs
    };
    ReactPixel.init('560263087692698');

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
            products(first:25) {
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

  addVariantToCart(variantId, quantity, title, price) {
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
    const locale = Cookie.get('locale') || 'en';

    return (
      <IntlProvider locale={locale}>
        <Router>
          <RootContainer>
            {/*Mobile Nav & Landscape Warning*/}
            <div>
              <MediaQuery maxDeviceWidth={1224}>
                <Nav
                  checkout={checkout}
                  updateQuantityInCart={this.updateQuantityInCart.bind(this)}
                  removeLineItemInCart={this.removeLineItemInCart.bind(this)}
                />
                <MediaQuery orientation="landscape">
                  <LandscapeMobilePrompt>
                    <LandscapeMobilePromptText>
                      Please rotate your phone into portrait mode.
                    </LandscapeMobilePromptText>
                  </LandscapeMobilePrompt>
                </MediaQuery>
              </MediaQuery>
            </div>

            {/*Desktop Nav*/}
            <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1600 }}>
              <DesktopNav
                checkout={checkout}
                updateQuantityInCart={this.updateQuantityInCart.bind(this)}
                removeLineItemInCart={this.removeLineItemInCart.bind(this)}
              />
            </MediaQuery>

            {/*Desktop Routes*/}
            <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1600 }}>
              <Switch>
                <Route exact path="/" component={DesktopFeatured} />

                <Route
                  exact
                  path="/support-center"
                  render={props => <SupportCenter />}
                />
                <Route
                  exact
                  path="/contact-us"
                  render={props => <ContactUs />}
                />

                <Route
                  exact
                  path="/terms-of-use"
                  render={props => <TermsOfUse />}
                />

                <Route
                  exact
                  path="/refund-policy"
                  render={props => <RefundPolicy />}
                />

                <Route
                  exact
                  path="/privacy-policy"
                  render={props => <PrivacyPolicy />}
                />

                <Route
                  exact
                  path="/starsigned-necklaces"
                  render={props => (
                    <DesktopCollectionList
                      collectionStringProps="starsigned-necklaces"
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/starsigned-necklaces/:handle"
                  render={props => (
                    <DesktopProductPage
                      addVariantToCart={this.addVariantToCart.bind(this)}
                      {...props}
                    />
                  )}
                />

                <Route
                  exact
                  path="/starsigned-bracelets"
                  render={props => (
                    <DesktopCollectionList
                      collectionStringProps="starsigned-bracelets"
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/starsigned-bracelets/:handle"
                  render={props => (
                    <DesktopProductPage
                      addVariantToCart={this.addVariantToCart.bind(this)}
                      {...props}
                    />
                  )}
                />

                <Route
                  exact
                  path="/starsigned-rings"
                  render={props => (
                    <DesktopCollectionList
                      collectionStringProps="starsigned-rings"
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/starsigned-rings/:handle"
                  render={props => (
                    <DesktopProductPage
                      addVariantToCart={this.addVariantToCart.bind(this)}
                      {...props}
                    />
                  )}
                />

                <Route
                  exact
                  path="/starsigned-lights-home"
                  render={props => (
                    <DesktopCollectionList
                      collectionStringProps="starsigned-lights-home"
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/starsigned-lights-home/:handle"
                  render={props => (
                    <DesktopProductPage
                      addVariantToCart={this.addVariantToCart.bind(this)}
                      {...props}
                    />
                  )}
                />

                <Route
                  exact
                  path="/starsigned-sterling-silver-stainless-steel"
                  render={props => (
                    <DesktopCollectionList
                      collectionStringProps="starsigned-sterling-silver-stainless-steel"
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/starsigned-sterling-silver-stainless-steel/:handle"
                  render={props => (
                    <DesktopProductPage
                      addVariantToCart={this.addVariantToCart.bind(this)}
                      {...props}
                    />
                  )}
                />

                <Route
                  exact
                  path="/starsigned-best-selling"
                  render={props => (
                    <DesktopCollectionList
                      collectionStringProps="starsigned-best-selling"
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/starsigned-best-selling/:handle"
                  render={props => (
                    <DesktopProductPage
                      addVariantToCart={this.addVariantToCart.bind(this)}
                      {...props}
                    />
                  )}
                />
              </Switch>
              <DesktopFooter />
            </MediaQuery>

            {/*Mobile Routes*/}
            <MediaQuery maxDeviceWidth={1224}>
              <Switch>
                <Route exact path="/" component={Featured} />

                <Route
                  exact
                  path="/support-center"
                  render={props => <SupportCenter />}
                />
                <Route
                  exact
                  path="/contact-us"
                  render={props => <ContactUs />}
                />

                <Route
                  exact
                  path="/terms-of-use"
                  render={props => <TermsOfUse />}
                />

                <Route
                  exact
                  path="/refund-policy"
                  render={props => <RefundPolicy />}
                />

                <Route
                  exact
                  path="/privacy-policy"
                  render={props => <PrivacyPolicy />}
                />

                <Route
                  exact
                  path="/starsigned-necklaces"
                  render={props => (
                    <CollectionList
                      collectionStringProps="starsigned-necklaces"
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/starsigned-necklaces/:handle"
                  render={props => (
                    <ProductPage
                      addVariantToCart={this.addVariantToCart.bind(this)}
                      {...props}
                    />
                  )}
                />

                <Route
                  exact
                  path="/starsigned-bracelets"
                  render={props => (
                    <CollectionList
                      collectionStringProps="starsigned-bracelets"
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/starsigned-bracelets/:handle"
                  render={props => (
                    <ProductPage
                      addVariantToCart={this.addVariantToCart.bind(this)}
                      {...props}
                    />
                  )}
                />

                <Route
                  exact
                  path="/starsigned-rings"
                  render={props => (
                    <CollectionList
                      collectionStringProps="starsigned-rings"
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/starsigned-rings/:handle"
                  render={props => (
                    <ProductPage
                      addVariantToCart={this.addVariantToCart.bind(this)}
                      {...props}
                    />
                  )}
                />

                <Route
                  exact
                  path="/starsigned-lights-home"
                  render={props => (
                    <CollectionList
                      collectionStringProps="starsigned-lights-home"
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/starsigned-lights-home/:handle"
                  render={props => (
                    <ProductPage
                      addVariantToCart={this.addVariantToCart.bind(this)}
                      {...props}
                    />
                  )}
                />

                <Route
                  exact
                  path="/starsigned-sterling-silver-stainless-steel"
                  render={props => (
                    <CollectionList
                      collectionStringProps="starsigned-sterling-silver-stainless-steel"
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/starsigned-sterling-silver-stainless-steel/:handle"
                  render={props => (
                    <ProductPage
                      addVariantToCart={this.addVariantToCart.bind(this)}
                      {...props}
                    />
                  )}
                />

                <Route
                  exact
                  path="/starsigned-best-selling"
                  render={props => (
                    <CollectionList
                      collectionStringProps="starsigned-best-selling"
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/starsigned-best-selling/:handle"
                  render={props => (
                    <ProductPage
                      addVariantToCart={this.addVariantToCart.bind(this)}
                      {...props}
                    />
                  )}
                />
              </Switch>
              <Footer />
            </MediaQuery>
          </RootContainer>
        </Router>
      </IntlProvider>
    );
  }
}
