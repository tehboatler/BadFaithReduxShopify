import actions from '../actions/constants';

const initialState = {
  cases: []
};

export default (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case actions.POST_CASE:
      return { cases: [...state.cases, ...action.payload] };
      break;

    case actions.GET_CASES:
      return { ...state, cases: [...data] };

    default:
      return state;
  }
};
