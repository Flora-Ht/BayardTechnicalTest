import * as types from './types';

export const getTrackById = (id: string) => ({
  type: types.GET_TRACK_BY_ID,
  payload: id,
});

export const getTrackByIdSuccess = (track: Track) => ({
  type: types.GET_TRACK_BY_ID_SUCCESS,
  payload: track,
});

export const getTrackByIdFailure = (error: unknown) => ({
  type: types.GET_TRACK_BY_ID_FAILURE,
  payload: error,
});

export const resetTracksList = () => ({
  type: types.RESET_TRACKS_LIST,
});
