import {
  INITIAL_ALCOHOL_BY_VOLUME,
  INITIAL_BITTERNESS_UNITS,
  INITIAL_COLOR_BY_EBC,
} from '../../shared/constants/beer/beerParams';
import {
  GET_BEER_LIST_FAILURE,
  GET_BEER_STARTED,
  GET_BEER_LIST_SUCCESS,
  ADD_FAVORITE_BEER,
  GET_FAVORITE_BEERS_SUCCESS,
  REMOVE_FAVORITE_BEER,
  SEARCH_BEERS_SUCCESS,
  SET_SEARCH_PARAMS,
  RESET_SEARCH_PARAMS,
  GET_BEER_INFO_SUCCESS,
  SET_FAVORITE_BEERS,
} from '../actionTypes';

export const initialState = {
  beersList: [],
  favoritesIds: [],
  favorites: [],
  isLoading: false,
  error: null,
  beerInfo: null,
  params: {
    ibu: INITIAL_BITTERNESS_UNITS,
    abv: INITIAL_ALCOHOL_BY_VOLUME,
    ebc: INITIAL_COLOR_BY_EBC,
    page: 1,
  },
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
      const { beersList: oldBeers, params: oldParams } = state;
      const {
        payload: { beers },
      } = action;

      const filteredBeers = beers.filter((loadedBeer) => {
        const found = oldBeers.find((beer) => loadedBeer.id === beer.id);
        return !found;
      });

      return {
        ...state,
        params: { ...oldParams, page: oldParams.page + 1 },
        beersList: [...oldBeers, ...filteredBeers],
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
    case SET_SEARCH_PARAMS: {
      const { params: newParams } = action.payload;

      return {
        ...state,
        params: newParams,
      };
    }
    case RESET_SEARCH_PARAMS: {
      const { params: defaultParams } = action.payload;

      return {
        ...state,
        params: defaultParams,
      };
    }
    case SEARCH_BEERS_SUCCESS: {
      const { beers } = action.payload;
      const { params: oldParams } = state;
      return {
        ...state,
        isLoading: false,
        params: { ...oldParams, page: oldParams.page + 1 },
        beersList: [...beers],
      };
    }
    case SET_FAVORITE_BEERS: {
      const { favorites } = action.payload;

      return {
        ...state,
        favoritesIds: favorites,
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
    case REMOVE_FAVORITE_BEER: {
      const { favoritesIds: favoritesBeersIds, favorites: favoritesBeers } = state;
      const { id } = action.payload;

      const updatedFavoritesIds = favoritesBeersIds.filter((beerId) => beerId !== id);
      const updatedFavorites = favoritesBeers.filter((beer) => beer.id !== id);

      return {
        ...state,
        favoritesIds: [...updatedFavoritesIds],
        favorites: [...updatedFavorites],
      };
    }
    case GET_FAVORITE_BEERS_SUCCESS: {
      const { favorites: beers } = action.payload;

      return {
        ...state,
        isLoading: false,
        favorites: [...beers],
      };
    }
    case GET_BEER_INFO_SUCCESS: {
      const { beer } = action.payload;

      return {
        ...state,
        beerInfo: beer,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
