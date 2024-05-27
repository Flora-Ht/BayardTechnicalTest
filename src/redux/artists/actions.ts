import * as types from './types';

export const getArtists = () => ({
  type: types.GET_ARTISTS,
});

export const getArtistsSuccess = (data: Artist[]) => ({
  type: types.GET_ARTISTS_SUCCESS,
  payload: data,
});

export const getArtistsFailure = (error: unknown) => ({
  type: types.GET_ARTISTS_FAILURE,
  payload: error,
});
