import axios from 'axios';
import {
  GET_BEER_STARTED,
  GET_BEER_LIST_SUCCESS,
  GET_BEER_LIST_FAILURE,
  FILTER_BEERS,
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

export function getBeerList() {
  return async (dispatch) => {
    dispatch(getBeerStarted());

    try {
      const res = await axios.get(process.env.REACT_APP_BEER_URL);
      dispatch(getBeerSuccess(res.data));
    } catch (err) {
      getBeerFailure(err);
    }
  };
}

export function getFavoriteBeer() {
  return async (dispatch) => {
    dispatch(getBeerStarted());

    try {
      const res = await axios.get(process.env.REACT_APP_BEER_URL);
      dispatch(getBeerSuccess(res.data));
    } catch (err) {
      getBeerFailure(err);
    }
  };
}

export function searchBeers(title) {
  return async (dispatch) => {
    dispatch(getBeerStarted());

    try {
      const res = await axios.get(process.env.REACT_APP_BEER_URL);
      const titleLowerCase = title.toLowerCase();
      const searched = res.data.filter((beer) => beer.name.toLowerCase().includes(titleLowerCase));

      dispatch(getBeerSuccess(searched));
    } catch (err) {
      getBeerFailure(err);
    }
  };
}

export function filterBeers(filters) {
  return {
    type: FILTER_BEERS,
    payload: {
      ...filters,
    },
  };
}
