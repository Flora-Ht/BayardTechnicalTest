import * as types from './types';
import { IAction } from '../../interfaces/store';

interface IState {
  loading: boolean;
  musicStyles: MusicStyle[];
  error?: unknown;
}

const initialState: IState = {
  loading: false,
  musicStyles: [],
  error: undefined,
};

const musicStylesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.GET_MUSIC_STYLES:
      return {
        ...state,
        loading: true,
      };
    case types.GET_MUSIC_STYLES_SUCCESS:
      return {
        ...state,
        loading: false,
        musicStyles: action.payload,
      };
    case types.GET_MUSIC_STYLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default musicStylesReducer;
