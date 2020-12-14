import {
  GET_BEER_LIST_FAILURE,
  GET_BEER_STARTED,
  GET_BEER_LIST_SUCCESS,
  ADD_FAVORITE_BEER,
  GET_FAVORITE_BEERS_SUCCESS,
} from '../actionTypes';

const initialState = {
  beersList: [],
  favoritesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  favorites: [],
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
        payload: { beers },
      } = action;

      return {
        ...state,
        beersList: [...oldBeers, ...beers],
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
      const { favoritesIds: favoritesBeers } = state;
      const { id } = action.payload;

      return {
        ...state,
        favoritesIds: [...favoritesBeers, id],
      };
    }
    case GET_FAVORITE_BEERS_SUCCESS: {
      const { favorites: beers } = action.payload;

      return {
        ...state,
        favorites: [...beers],
      };
    }
    default:
      return state;
  }
}
