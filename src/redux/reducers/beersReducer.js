import {
  GET_BEER_LIST_FAILURE,
  GET_BEER_STARTED,
  GET_BEER_LIST_SUCCESS,
  FILTER_BEERS,
} from '../actionTypes';

const initialState = {
  beersList: [],
  searchedBeers: null,
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
      return {
        ...state,
        beersList: action.payload.beers,
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
    case FILTER_BEERS: {
      const { beersList: beers, searchedBeers } = state;
      const { ibu, abv, ebc } = action.payload;

      const searched = [...(searchedBeers ?? beers)];

      const filtered = searched.filter(
        (beer) =>
          (ibu ? Number(beer.ibu) === Number(ibu) : true) &&
          (abv ? Number(beer.abv) === Number(abv) : true) &&
          (ebc ? Number(beer.ebc) === Number(ebc) : true)
      );

      return {
        ...state,
        searchedBeers: searched,
        beersList: filtered,
      };
    }

    default:
      return state;
  }
}
