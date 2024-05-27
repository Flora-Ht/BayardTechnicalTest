import { NavigatorScreenParams } from '@react-navigation/native';
import { ArtistsNavigatorParamList } from './ArtistsNavigatorParamList';

export type TabNavigatorParamList = {
  Artists: NavigatorScreenParams<ArtistsNavigatorParamList>;
  MusicStyles: undefined;
  Favorites: undefined;
};
