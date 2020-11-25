import axios from 'axios';
import { GET_BEER_STARTED, GET_BEER_LIST_SUCCESS, GET_BEER_LIST_FAILURE } from '../actionTypes';

const getBeerStarted = () => ({
  type: GET_BEER_STARTED,
});

const getBeerFailure = (error) => ({
  type: GET_BEER_LIST_FAILURE,
  payload: {
    error,
  },
});

const getBeerSuccess = (tasks) => ({
  type: GET_BEER_LIST_SUCCESS,
  payload: {
    tasks,
  },
});

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
      const res = await axios.get(process.env.REACT_APP_TASKS_URL);
      dispatch(getBeerSuccess(res.data));
    } catch (err) {
      getBeerFailure(err);
    }
  };
}
