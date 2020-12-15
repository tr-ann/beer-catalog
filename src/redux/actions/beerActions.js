import axios from 'axios';
import { stringify } from 'query-string';
import {
  GET_BEER_STARTED,
  GET_BEER_LIST_SUCCESS,
  GET_BEER_LIST_FAILURE,
  ADD_FAVORITE_BEER,
  GET_FAVORITE_BEERS_SUCCESS,
  REMOVE_FAVORITE_BEER,
  SEARCH_BEERS_SUCCESS,
  SET_SEARCH_PARAMS,
} from '../actionTypes';

const getBeerStarted = () => ({
  type: GET_BEER_STARTED,
});

const getBeerFailure = (error) => ({
  type: GET_BEER_LIST_FAILURE,
  payload: {
    error,
  },
});

const getBeerSuccess = (beers) => {
  return {
    type: GET_BEER_LIST_SUCCESS,
    payload: {
      beers,
    },
  };
};

const getFavoriteBeerSuccess = (favorites) => {
  return {
    type: GET_FAVORITE_BEERS_SUCCESS,
    payload: {
      favorites,
    },
  };
};

const searchBeersSuccess = (beers) => {
  return {
    type: SEARCH_BEERS_SUCCESS,
    payload: {
      beers,
    },
  };
};

const setSearchParams = (params) => {
  return {
    type: SET_SEARCH_PARAMS,
    payload: {
      params,
    },
  };
};

export function getBeerList(params) {
  return async (dispatch, getState) => {
    dispatch(getBeerStarted());

    const { params: stateParams } = getState();
    const allParams = { ...params, ...stateParams };

    try {
      const options = stringify(allParams, { skipEmptyString: true });
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
    dispatch(setSearchParams({ ...params, page: 1 }));

    const { params: updatedParams } = getState();

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
      const { favoritesIds } = getState();
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
    payload: {
      id,
    },
  };
};

export const removeFavoriteBeer = (id) => {
  return {
    type: REMOVE_FAVORITE_BEER,
    payload: {
      id,
    },
  };
};
