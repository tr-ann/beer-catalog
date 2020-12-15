import {
  GET_BEER_LIST_FAILURE,
  GET_BEER_STARTED,
  GET_BEER_LIST_SUCCESS,
  ADD_FAVORITE_BEER,
  GET_FAVORITE_BEERS_SUCCESS,
  REMOVE_FAVORITE_BEER,
} from '../actionTypes';

const initialState = {
  beersList: [],
  favoritesIds: [],
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

      const filteredBeers = beers.filter(
        (loadedBeer) => oldBeers.findIndex((beer) => loadedBeer.id === beer.id) === -1
      );

      return {
        ...state,
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
    default:
      return state;
  }
}
