import reducer, { initialState } from '../beersReducer';
import * as t from '../../actionTypes/index';

describe('beers reducer. SEARCH BEERS', () => {
  it('SET SEARCH PARAMS', () => {
    const state = { ...initialState };
    const action = {
      type: t.SET_SEARCH_PARAMS,
      payload: { params: 'search params' },
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      params: action.payload.params,
    });
  });

  it('RESET SEARCH PARAMS', () => {
    const state = { ...initialState, params: 'old params' };
    const action = {
      type: t.RESET_SEARCH_PARAMS,
      payload: { params: initialState.params },
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      params: action.payload.params,
    });
  });

  it('SEARCH BEERS SUCCESS', () => {
    const state = { ...initialState, isLoading: true };
    const action = {
      type: t.SEARCH_BEERS_SUCCESS,
      payload: { beers: ['beers'] },
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      isLoading: false,
      beersList: action.payload.beers,
      params: {
        ...state.params,
        page: state.params.page + 1,
      },
    });
  });
});
