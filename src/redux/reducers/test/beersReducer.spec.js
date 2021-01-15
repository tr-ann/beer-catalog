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

describe('beers reducer. FAVORITES BEERS', () => {
  it('ADD FAVORITE BEER', () => {
    const state = { ...initialState };
    const action = {
      type: t.ADD_FAVORITE_BEER,
      payload: { id: 1234 },
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      favoritesIds: [...state.favoritesIds, action.payload.id],
    });
  });

  it('REMOVE FAVORITE BEER', () => {
    const state = { ...initialState, favoritesIds: [1, 2, 3, 4, 5] };
    const action = {
      type: t.REMOVE_FAVORITE_BEER,
      payload: { id: 3 },
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      favoritesIds: [1, 2, 4, 5],
    });
  });

  it('GET FAVORITE BEERS SUCCESS', () => {
    const state = { ...initialState, isLoading: true };
    const action = {
      type: t.GET_FAVORITE_BEERS_SUCCESS,
      payload: { favorites: ['beers', 'beers'] },
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      isLoading: false,
      favorites: action.payload.favorites,
    });
  });
});

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
