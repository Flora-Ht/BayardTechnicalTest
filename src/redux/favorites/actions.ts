import * as types from './types';

export const addFavorite = (id: string) => ({
  type: types.ADD_FAVORITE,
  payload: id,
});

export const removeFavorite = (id: string) => ({
  type: types.REMOVE_FAVORITE,
  payload: id,
});

export const getFavTrackById = (id: string) => ({
  type: types.GET_FAV_TRACK_BY_ID,
  payload: id,
});

export const getFavTrackByIdSuccess = (track: Track) => ({
  type: types.GET_FAV_TRACK_BY_ID_SUCCESS,
  payload: track,
});

export const getFavTrackByIdFailure = (error: unknown) => ({
  type: types.GET_FAV_TRACK_BY_ID_FAILURE,
  payload: error,
});

export const resetFavoriteslist = () => ({
  type: types.RESET_FAVORITES_LIST,
});
