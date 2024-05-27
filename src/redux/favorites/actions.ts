import * as types from './types';

export const addFavorite = () => ({
  type: types.ADD_FAVORITE,
  payload: null,
});

export const addFavoriteSuccess = () => ({
  type: types.ADD_FAVORITE_SUCCESS,
  payload: null,
});

export const addFavoriteFailure = () => ({
  type: types.ADD_FAVORITE_FAILURE,
  payload: null,
});
