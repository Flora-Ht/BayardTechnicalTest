import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyle } from '../../utils/styles';
import { ArtistsNavigatorParamList } from '../../navigators/ArtistsNavigatorParamList';
import { useDispatch, useSelector } from 'react-redux';
import { resetTracksList } from '../../redux/tracks/actions';
import {
  tracksLoadingSelector,
  tracksSelector,
} from '../../redux/tracks/selectors';
import TrackItem from '../components/TrackItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MusicStylesNavigatorParamList } from '../../navigators/MusicStylesNavigatorParamList';

const MusicStyleDetails = ({
  route,
  navigation,
}: NativeStackScreenProps<
  MusicStylesNavigatorParamList,
  'MusicStyleDetails'
>) => {
  const musicStyle = route.params?.musicStyle;

  const dispatch = useDispatch();
  const tracks = useSelector(tracksSelector);
  const tracksLoading = useSelector(tracksLoadingSelector);

  useEffect(() => {
    navigation.setOptions({
      title: musicStyle.title,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
            dispatch(resetTracksList());
          }}>
          <Ionicons
            name="caret-back-outline"
            color={GlobalStyle.primary}
            size={20}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: GlobalStyle.tertiary,
        }}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {!tracksLoading ? (
          tracks.map(item => {
            return <TrackItem key={item.id} track={item} />;
          })
        ) : (
          <ActivityIndicator size={'large'} color={GlobalStyle.accent} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MusicStyleDetails;