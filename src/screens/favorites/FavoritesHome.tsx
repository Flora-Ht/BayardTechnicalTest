import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  favoriteTracksSelector,
  favoritesSelector,
} from '../../redux/favorites/selectors';
import TrackItem from '../components/TrackItem';
import { TabNavigatorParamList } from '../../navigators/TabNavigatorParamList';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { GlobalStyle } from '../../utils/styles';
import { setCurrentTrack } from '../../redux/tracks/actions';

const FavoritesHome = ({
  route,
  navigation,
}: BottomTabScreenProps<TabNavigatorParamList, 'FavoritesHome'>) => {
  const dispatch = useDispatch();
  const favorites = useSelector(favoritesSelector);
  const favTracks = useSelector(favoriteTracksSelector);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {favTracks && favTracks.length > 0 ? (
          favTracks.map(item => {
            return (
              <TrackItem
                key={item.id}
                track={item}
                onPress={() => {
                  dispatch(setCurrentTrack(item));
                  navigation.navigate('Player' as any, item);
                }}
              />
            );
          })
        ) : (
          <Text style={styles.textEmpty}>
            Oops, vous n'avez pas encore enregistré de morceaux favoris !
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoritesHome;

const styles = StyleSheet.create({
  textEmpty: {
    color: GlobalStyle.accent,
    paddingHorizontal: 10,
    paddingVertical: 40,
    textAlign: 'center',
  },
});
