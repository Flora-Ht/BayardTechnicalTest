import { RootStateType } from '../reducers';

export const artistsSelector = (store: RootStateType): Artist[] =>
  store.artists.artists;
