import actions from '../actions/constants';

const initialState = {
  cases: [
    {
      id: 1,
      title: 'Leo',
      desc:
        'Lorem ipsum dolor amet schlitz slow-carb seitan listicle, affogato VHS put a bird on it adaptogen chartreuse. Fanny pack trust fund meh, truffaut skateboard chicharrones palo santo jean shorts dreamcatcher fixie. ',
      price: 10
    },
    {
      id: 2,
      title: 'Scorpio',
      desc: 'Lorem ipsum dolor amet schlitz slow-carb seitan listicle, affogato VHS put a bird on it adaptogen chartreuse. Fanny pack trust fund meh, truffaut skateboard chicharrones palo santo jean shorts dreamcatcher fixie. ',
      price: 100
    },
    {
      id: 3,
      title: 'Gemini',
      desc: 'Lorem ipsum dolor amet schlitz slow-carb seitan listicle, affogato VHS put a bird on it adaptogen chartreuse. Fanny pack trust fund meh, truffaut skateboard chicharrones palo santo jean shorts dreamcatcher fixie. ',
      price: 1000
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.POST_CASE:
      return { cases: [...state.cases, ...action.payload] };
      break;

    case actions.GET_CASES:
      return { ...state, cases: [...state.cases] };

    default:
      return state;
  }
};
