import { combineReducers } from 'redux';
import artistsReducer from './artists/reducer';

export const combinedReducers = combineReducers({
  artists: artistsReducer,
});
