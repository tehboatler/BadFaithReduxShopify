"use strict"
import { gql } from 'babel-plugin-graphql-js-client-transform';
import { client } from '../src/app';
import actions from './constants';


export function getCases() {
  return async function(dispatch) {
    
   const res = await 
   client.send(
        gql(client)`
        query {
          shop {
            name
            description
            products(first:12) {
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
      const cases = await res.model.shop.products;
      console.log(cases)
      return dispatch({
        type: actions.GET_CASES,
        data: cases
      })
  }
}

export function getSimpleCases() {
  return async function(dispatch) {
    
   const res = await 
   client.send(
        gql(client)`
        query {
          shop {
            name
            description
            products(first:12 after:"eyJsYXN0X2lkIjo1ODQxNDg1NDk2OTEsImxhc3RfdmFsdWUiOiI1ODQxNDg1NDk2OTEifQ==") {
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
      const cases = await res.model.shop.products;
      console.log(cases)
      return dispatch({
        type: actions.GET_SIMPLE_CASES,
        data: cases
      })
  }
}

export function getCase(handle) {
  return async function(dispatch) {
    // const idVariable = client.variable('handle', 'String!', `${handle}`);
    console.log(handle)
    const query = gql(client)`
    query ($handle:String!){
      shop {
        name
          products(first: 1, query: $handle){
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                description
              }
            }
        }
      }
    }
  `
   const res = await client.send(query, {handle} )
      const phonecase = await res.model.shop.products
      return dispatch({
        type: actions.GET_CASE,
        data: phonecase
      })
  }
}

export const nullCases = () => ({
  type: actions.NULL_CASE_LIST,
})

export const deleteCase = (caseItem) => ({
  type: actions.DELETE_CASE,
  payload: caseItem
})

export const updateCase = (caseItem) => ({
  type: actions.UPDATE_CASE,
  payload: caseItem
})
