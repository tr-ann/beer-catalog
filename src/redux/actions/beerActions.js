import axios from 'axios';
import { stringify } from 'query-string';
import {
  INITIAL_ALCOHOL_BY_VOLUME,
  INITIAL_BITTERNESS_UNITS,
  INITIAL_COLOR_BY_EBC,
} from '../../shared/constants/beer/beerParams';
import {
  GET_BEER_STARTED,
  GET_BEER_LIST_SUCCESS,
  GET_BEER_LIST_FAILURE,
  ADD_FAVORITE_BEER,
  GET_FAVORITE_BEERS_SUCCESS,
  REMOVE_FAVORITE_BEER,
  SEARCH_BEERS_SUCCESS,
  SET_SEARCH_PARAMS,
  RESET_SEARCH_PARAMS,
  GET_BEER_INFO_SUCCESS,
} from '../actionTypes';

const getBeerStarted = () => ({
  type: GET_BEER_STARTED,
});

const getBeerFailure = (error) => ({
  type: GET_BEER_LIST_FAILURE,
  payload: { error },
});

const getBeerSuccess = (beers) => {
  return {
    type: GET_BEER_LIST_SUCCESS,
    payload: { beers },
  };
};

const getFavoriteBeerSuccess = (favorites) => {
  return {
    type: GET_FAVORITE_BEERS_SUCCESS,
    payload: { favorites },
  };
};

const searchBeersSuccess = (beers) => {
  return {
    type: SEARCH_BEERS_SUCCESS,
    payload: { beers },
  };
};

const setSearchParams = (params) => {
  return {
    type: SET_SEARCH_PARAMS,
    payload: { params },
  };
};

const resetSearchParams = () => {
  return {
    type: RESET_SEARCH_PARAMS,
    payload: {
      params: {
        ibu: INITIAL_BITTERNESS_UNITS,
        abv: INITIAL_ALCOHOL_BY_VOLUME,
        ebc: INITIAL_COLOR_BY_EBC,
        page: 1,
      },
    },
  };
};

const getBeerInfoSuccess = (beer) => {
  return {
    type: GET_BEER_INFO_SUCCESS,
    payload: { beer },
  };
};

export function getBeerList() {
  return async (dispatch, getState) => {
    dispatch(getBeerStarted());

    const {
      beers: { params },
    } = getState();

    try {
      const options = stringify(params, { skipEmptyString: true });
      const res = await axios.get(`${process.env.REACT_APP_BEER_URL}?${options}`);

      dispatch(getBeerSuccess(res.data));
    } catch (err) {
      getBeerFailure(err);
    }
  };
}

export function searchBeers(params = {}) {
  return async (dispatch, getState) => {
    dispatch(getBeerStarted());
    if (params.beer_name) {
      dispatch(setSearchParams({ ...params, page: 1 }));
    } else {
      dispatch(resetSearchParams());
    }

    const {
      beers: { params: updatedParams },
    } = getState();

    try {
      const options = stringify(updatedParams, { skipEmptyString: true });
      const res = await axios.get(`${process.env.REACT_APP_BEER_URL}?${options}`);

      dispatch(searchBeersSuccess(res.data));
    } catch (err) {
      getBeerFailure(err);
    }
  };
}

export function getFavoriteBeer() {
  return async (dispatch, getState) => {
    dispatch(getBeerStarted());

    try {
      const {
        beers: { favoritesIds },
      } = getState();
      const ids = favoritesIds.join('|');

      const res = await axios.get(`${process.env.REACT_APP_BEER_URL}?ids=${ids}`);
      dispatch(getFavoriteBeerSuccess(res.data));
    } catch (err) {
      getBeerFailure(err);
    }
  };
}

export const addFavoriteBeer = (id) => {
  return {
    type: ADD_FAVORITE_BEER,
    payload: { id },
  };
};

export const removeFavoriteBeer = (id) => {
  return {
    type: REMOVE_FAVORITE_BEER,
    payload: { id },
  };
};

export const getBeerInfo = (id) => {
  return async (dispatch) => {
    dispatch(getBeerStarted());

    try {
      const res = await axios.get(`${process.env.REACT_APP_BEER_URL}/${id}`);

      dispatch(getBeerInfoSuccess(res.data[0]));
    } catch (err) {
      getBeerFailure(err);
    }
  };
};
