import reducer, { initialState } from '../beersReducer';
import * as t from '../../actionTypes/index';

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
