import * as types from './types';

export const getMusicStyles = () => ({
  type: types.GET_MUSIC_STYLES,
});

export const getMusicStylesSuccess = (data: MusicStyle[]) => ({
  type: types.GET_MUSIC_STYLES_SUCCESS,
  payload: data,
});

export const getMusicStylesFailure = (error: unknown) => ({
  type: types.GET_MUSIC_STYLES_FAILURE,
  payload: error,
});
