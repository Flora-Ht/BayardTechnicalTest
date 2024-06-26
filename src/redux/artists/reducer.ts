import * as types from './types';
import { IAction } from '../../interfaces/store';

interface IState {
  loading: boolean;
  artists: Artist[];
  error?: unknown;
}

const initialState: IState = {
  loading: false,
  artists: [],
  error: undefined,
};

const artistsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.GET_ARTISTS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ARTISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        artists: action.payload,
      };
    case types.GET_ARTISTS_FAILURE:
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

export default artistsReducer;
