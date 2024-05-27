import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyle } from '../../utils/styles';
import { useDispatch, useSelector } from 'react-redux';
import { currentTrackSelector } from '../../redux/tracks/selectors';
import { RootNavigatorParamList } from '../../navigators/RootNavigatorParamList';
import { AudioPlayer } from 'react-native-simple-audio-player';

const Player = ({
  route,
  navigation,
}: NativeStackScreenProps<RootNavigatorParamList, 'Player'>) => {
  const currentTrack = useSelector(currentTrackSelector);

  useEffect(() => {
    console.log('Current track', currentTrack);
    if (currentTrack) {
      navigation.setOptions({ title: currentTrack.title });
    }
  }, [currentTrack]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#313131',
          justifyContent: 'center',
        }}>
        {currentTrack ? (
          <AudioPlayer url={currentTrack.audiofile[0].url} />
        ) : (
          <ActivityIndicator color={GlobalStyle.tertiary} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Player;
