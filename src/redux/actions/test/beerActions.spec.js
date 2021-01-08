import * as t from '../../actionTypes/index';
import { getBeerStarted } from '../beerActions';

describe('beer actions', () => {
  it('getBeerStarted(): should create an action to set isLoading', () => {
    const expectedAction = { type: t.GET_BEER_STARTED };
    expect(getBeerStarted()).toEqual(expectedAction);
  });
});
