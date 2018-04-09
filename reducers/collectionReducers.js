import actions from '../actions/constants';
import { gql } from 'babel-plugin-graphql-js-client-transform';
import { client } from '../src/app';

// ============================================================
// Actions
// ============================================================

export function getCollection(collection_handle) {
  console.log('test');
  return async function(dispatch) {
    const res = await client.send(
      gql(client)`
        query($collection_handle: String! ) {
          shop {
            collectionByHandle(handle: $collection_handle) {
                    products(first: 12) {
                      pageInfo {
                        hasNextPage
                        hasPreviousPage
                      }
                      edges {
                        node {
                          title
                          id
                          description
                          images(first: 1) {
                            pageInfo {
                              hasNextPage
                              hasPreviousPage
                            }
                            edges {
                              node {
                                originalSrc
                                transformedSrc
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              
      `,
      { collection_handle }
    );
    const collectionProducts = await res.model.shop.collectionByHandle.products;
    return dispatch({
      type: actions.GET_COLLECTION,
      collectionItems: collectionProducts,
      collectionHandle: collection_handle
    });
  };
}

// ============================================================
// Reducers
// ============================================================
const initialState = {
  collections: []
};

export default (state = initialState, action) => {
  const { type, data, collectionItems, collectionHandle } = action;
  switch (type) {
    case actions.NULL_CASE_LIST:
      return { ...state, cases: [] };
      break;

    case actions.GET_COLLECTION:
      return {
        ...state,
        collections: [ {[collectionHandle]: [...collectionItems]}]
      };
      break;

    case actions.GET_ITEM:
      return { ...state, currentItem: [...data] };
      break;

    default:
      return state;
  }
};
