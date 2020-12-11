import axios from 'axios';
import queryString from 'query-string';
import { PAGE_ITEMS_AMOUNT } from '../../shared/constants/pagination/pagination';
import {
  GET_BEER_STARTED,
  GET_BEER_LIST_SUCCESS,
  GET_BEER_LIST_FAILURE,
  ADD_FAVORITE_BEER,
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

export function getBeerList(params = {}) {
  return async (dispatch) => {
    dispatch(getBeerStarted());

    try {
      const options = queryString.stringify(params, { skipEmptyString: true });
      const res = await axios.get(`${process.env.REACT_APP_BEER_URL}?${options}`);

      dispatch(getBeerSuccess(res.data));
    } catch (err) {
      getBeerFailure(err);
    }
  };
}

export function getFavoriteBeer(page) {
  return async (dispatch, getState) => {
    dispatch(getBeerStarted());

    try {
      const { favorites } = getState();
      const startItem = page * PAGE_ITEMS_AMOUNT;
      const ids = favorites.slice(startItem, startItem + PAGE_ITEMS_AMOUNT).join('|');

      const res = await axios.get(`${process.env.REACT_APP_BEER_URL}?ids=${ids}`);
      dispatch(getBeerSuccess(res.data));
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
