import * as types from './types';
import { IAction } from '../../interfaces/store';

interface IState {
  loading: boolean;
  tracks: Track[];
  currentTrack?: Track;
  error?: unknown;
}

const initialState: IState = {
  loading: false,
  tracks: [],
  currentTrack: undefined,
  error: undefined,
};

const tracksReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.GET_TRACK_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case types.GET_TRACK_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        tracks: [...state.tracks, action.payload],
      };
    case types.GET_TRACK_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.RESET_TRACKS_LIST:
      return {
        ...state,
        loading: false,
        tracks: [],
      };
    case types.SET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default tracksReducer;
