import { RootStateType } from '../reducers';

export const tracksLoadingSelector = (store: RootStateType): boolean =>
  store.tracks.loading;
export const tracksSelector = (store: RootStateType): Track[] =>
  store.tracks.tracks;
