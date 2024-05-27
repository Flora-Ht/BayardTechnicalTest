import * as types from './types';
import { IAction } from '../../interfaces/store';

interface IState {
  loading: boolean;
  favorites: string[];
  favoriteTracks: Track[];
  error?: unknown;
}

const initialState: IState = {
  loading: false,
  favorites: [],
  favoriteTracks: [],
  error: undefined,
};

const favoritesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.ADD_FAVORITE:
      return {
        ...state,
        loading: false,
        favorites: [...state.favorites, action.payload],
      };
    case types.REMOVE_FAVORITE:
      return {
        ...state,
        loading: false,
        favorites: state.favorites?.filter(item => item != action.payload),
        favoriteTracks: state.favoriteTracks?.filter(
          item => item.id != action.payload,
        ),
      };
    case types.GET_FAV_TRACK_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case types.GET_FAV_TRACK_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        favoriteTracks: [...state.favoriteTracks, action.payload],
      };
    case types.GET_FAV_TRACK_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.RESET_FAVORITES_LIST:
      return {
        ...state,
        favorites: [],
        favoriteTracks: [],
      };

    default: {
      return state;
    }
  }
};

export default favoritesReducer;
