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
      const cases = await res.model.shop.products;
      console.log(cases)
      return dispatch({
        type: actions.GET_CASES,
        data: cases
      })
  }
}


export const postCase = (caseItem) => ({
  type: actions.POST_CASE,
  payload: caseItem,
})

export const deleteCase = (caseItem) => ({
  type: actions.DELETE_CASE,
  payload: caseItem
})

export const updateCase = (caseItem) => ({
  type: actions.UPDATE_CASE,
  payload: caseItem
})
