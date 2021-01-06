import reducer, { initialState } from '../beersReducer';
import * as t from '../../actionTypes/index';

describe('beers reducer. BEER INFO', () => {
  it('GET BEER INFO SUCCESS', () => {
    const state = { ...initialState, isLoading: true };
    const action = {
      type: t.GET_BEER_INFO_SUCCESS,
      payload: { beer: 'beer' },
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      isLoading: false,
      beerInfo: action.payload.beer,
    });
  });
});
