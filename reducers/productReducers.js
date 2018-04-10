import actions from '../actions/constants';
import { gql } from 'babel-plugin-graphql-js-client-transform';
import { client } from '../src/app';

// ============================================================
// Actions
// ============================================================

export function getProduct(product_handle) {
  console.log('getProduct() fired');
  return async function(dispatch) {
    const res = await client.send(
      gql(client)`
      query ($product_handle: String!){
        shop {
            productByHandle(handle: $product_handle) {
              title
              description
              images(first:20) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
              edges {
                node {
                  originalSrc
                }
              }
            }
              variants(first: 20) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
              edges {
                node{ 
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            }
          }
        }
      `,
      { product_handle }
    );
    const product = await res.model.shop.productByHandle;
    return dispatch({
      type: actions.GET_PRODUCT,
      product: product,
      productHandle: product_handle,
      productLoaded: true,
    });
  };
}

// ============================================================
// Reducers
// ============================================================
const initialState = {
  products: []
};

export default (state = initialState, action) => {
  const { type, product, productHandle } = action;
  switch (type) {
    case actions.GET_PRODUCT:
      return {
        ...state,
        products: {[productHandle]: {...product}}
      };
      break;

    default:
      return state;
  }
};
