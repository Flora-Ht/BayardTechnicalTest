import { RootStateType } from '../reducers';

export const favoritesSelector = (store: RootStateType): string[] =>
  store.favorites.favorites;
export const favoriteTracksSelector = (store: RootStateType): Track[] =>
  store.favorites.favoriteTracks;
