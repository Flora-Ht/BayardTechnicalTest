import { NavigatorScreenParams } from '@react-navigation/native';
import { ArtistsNavigatorParamList } from './ArtistsNavigatorParamList';
import { MusicStylesNavigatorParamList } from './MusicStylesNavigatorParamList';

export type TabNavigatorParamList = {
  Artists: NavigatorScreenParams<ArtistsNavigatorParamList>;
  MusicStyles: NavigatorScreenParams<MusicStylesNavigatorParamList>;
  FavoritesHome: undefined;
};
