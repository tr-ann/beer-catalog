import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as t from '../../actionTypes/index';
import { getBeerList, getBeerStarted } from '../beerActions';
import { initialState } from '../../reducers/beersReducer';

const mockStore = configureMockStore([thunk]);

describe('beer actions', () => {
  describe('sync actions', () => {
    it('getBeerStarted(): should create an action to set isLoading', () => {
      const expectedAction = { type: t.GET_BEER_STARTED };
      expect(getBeerStarted()).toEqual(expectedAction);
    });
  });

  describe('async actions', () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    it('getBeers(): fetching beers has been done', () => {
      fetchMock.getOnce(`${process.env.REACT_APP_BEER_URL}`, {
        data: 'beers',
      });

      const expectedActions = [
        {
          type: t.GET_BEER_STARTED,
        },
        {
          type: t.GET_BEER_LIST_SUCCESS,
          payload: 'beers',
        },
      ];

      const store = mockStore({ beers: initialState });

      return store.dispatch(getBeerList()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
