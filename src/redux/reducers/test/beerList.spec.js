import reducer, { initialState } from '../beersReducer';
import * as t from '../../actionTypes/index';

describe('beers reducer. BEER LIST', () => {
  it('GET BEER STARTED', () => {
    const state = { ...initialState };
    const action = {
      type: t.GET_BEER_STARTED,
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      isLoading: true,
    });
  });

  it('GET BEER LIST SUCCESS', () => {
    const state = {
      ...initialState,
      beersList: [
        { id: 1, name: 'beer1' },
        { id: 2, name: 'beer2' },
      ],
      isLoading: true,
    };
    const action = {
      type: t.GET_BEER_LIST_SUCCESS,
      payload: {
        beers: [
          { id: 2, name: 'beer2' },
          { id: 4, name: 'beer4' },
        ],
      },
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      isLoading: false,
      beersList: [
        { id: 1, name: 'beer1' },
        { id: 2, name: 'beer2' },
        { id: 4, name: 'beer4' },
      ],
      params: {
        ...state.params,
        page: state.params.page + 1,
      },
    });
  });

  it('GET BEER LIST FAILURE', () => {
    const action = {
      type: t.GET_BEER_LIST_FAILURE,
      payload: { error: 'error' },
    };
    const state = {
      ...initialState,
      isLoading: true,
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      isLoading: false,
      error: action.payload.error,
    });
  });
});
