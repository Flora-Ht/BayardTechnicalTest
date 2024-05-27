import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArtistItem from './components/ArtistItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GlobalStyle } from '../../utils/styles';
import { ArtistsNavigatorParamList } from '../../navigators/ArtistsNavigatorParamList';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtists } from '../../redux/artists/actions';
import { artistsSelector } from '../../redux/artists/selectors';
import { getTrackById, resetTracksList } from '../../redux/tracks/actions';
import { resetFavoriteslist } from '../../redux/favorites/actions';

const ArtistsHome = ({
  route,
  navigation,
}: NativeStackScreenProps<ArtistsNavigatorParamList, 'ArtistsHome'>) => {
  const dispatch = useDispatch();
  const artists = useSelector(artistsSelector);

  useEffect(() => {
    dispatch(getArtists());
  }, [navigation]);

  const onArtistPress = (artist: Artist) => {
    dispatch(resetTracksList());
    navigation.navigate('ArtistDetails', { artist });
    artist.tracks.forEach(track => {
      dispatch(getTrackById(track));
    });
  };

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
        {artists.map(item => {
          return (
            <ArtistItem key={item.id} artist={item} onPress={onArtistPress} />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistsHome;
