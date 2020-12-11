import {
  GET_BEER_LIST_FAILURE,
  GET_BEER_STARTED,
  GET_BEER_LIST_SUCCESS,
  ADD_FAVORITE_BEER,
} from '../actionTypes';

const initialState = {
  beersList: [],
  favorites: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
      // const { beersList: oldBeers } = state;
      const {
        payload: { beers },
      } = action;

      return {
        ...state,
        beersList: [...beers],
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
    case ADD_FAVORITE_BEER: {
      const { favorites: favoritesBeers } = state;
      const { id } = action.payload;

      return {
        ...state,
        favorites: [...favoritesBeers, id],
      };
    }
    default:
      return state;
  }
}
