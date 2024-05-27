import { RootStateType } from '../reducers';

export const musicStylesSelector = (store: RootStateType): MusicStyle[] =>
  store.musicStyles.musicStyles;
