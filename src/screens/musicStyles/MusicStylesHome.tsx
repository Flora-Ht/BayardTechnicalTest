import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { MusicStylesNavigatorParamList } from '../../navigators/MusicStylesNavigatorParamList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMusicStyles } from '../../redux/musicStyles/actions';
import { musicStylesSelector } from '../../redux/musicStyles/selectors';
import MusicStyleItem from './components/MusicStyleItem';
import { getTrackById, resetTracksList } from '../../redux/tracks/actions';

const MusicStylesHome = ({
  route,
  navigation,
}: NativeStackScreenProps<
  MusicStylesNavigatorParamList,
  'MusicStylesHome'
>) => {
  const dispatch = useDispatch();
  const musicStyles = useSelector(musicStylesSelector).sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  useEffect(() => {
    dispatch(getMusicStyles());
  }, [navigation]);

  const onStylepress = (musicStyle: MusicStyle) => {
    dispatch(resetTracksList());
    navigation.navigate('MusicStyleDetails', { musicStyle });
    musicStyle.tracks.forEach(track => {
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
        {musicStyles.map(item => {
          return (
            <MusicStyleItem
              key={item.id}
              musicStyle={item}
              onPress={onStylepress}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MusicStylesHome;
