import * as types from './types';
import { IAction } from '../../interfaces/store';

interface IState {
  loading: boolean;
  favorites: Track[];
}

const initialState: IState = {
  loading: false,
  favorites: [],
};

const favoritesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default favoritesReducer;
