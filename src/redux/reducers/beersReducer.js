import { GET_BEER_LIST_FAILURE, GET_BEER_STARTED, GET_BEER_LIST_SUCCESS } from '../actionTypes';

const initialState = {
  beersList: [],
  isLoading: false,
  error: null,
};

export default function beersList(state = initialState, action) {
  switch (action.type) {
    case GET_BEER_STARTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_BEER_LIST_SUCCESS: {
      const { beersList: oldBeers } = state;
      const {
        payload: { beers, clearOld },
      } = action;
      const newBeers = clearOld ? [...beers] : [...oldBeers, ...beers];

      return {
        ...state,
        beersList: newBeers,
        isLoading: false,
      };
    }
    case GET_BEER_LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}
