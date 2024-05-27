import { combineReducers } from 'redux';
import artistsReducer from './artists/reducer';
import tracksReducer from './tracks/reducer';
import musicStylesReducer from './musicStyles/reducer';
import favoritesReducer from './favorites/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const combinedReducers = combineReducers({
  artists: artistsReducer,
  tracks: tracksReducer,
  musicStyles: musicStylesReducer,
  favorites: favoritesReducer,
});
export type RootStateType = ReturnType<typeof combinedReducers>;

export default persistReducer<RootStateType>(persistConfig, combinedReducers);
