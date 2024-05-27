import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyle } from '../../utils/styles';
import { useDispatch, useSelector } from 'react-redux';
import { currentTrackSelector } from '../../redux/tracks/selectors';
import { RootNavigatorParamList } from '../../navigators/RootNavigatorParamList';
import { AudioPlayer } from 'react-native-simple-audio-player';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Player = ({
  route,
  navigation,
}: NativeStackScreenProps<RootNavigatorParamList, 'Player'>) => {
  const currentTrack = useSelector(currentTrackSelector);

  useEffect(() => {
    if (currentTrack) {
      navigation.setOptions({
        title: currentTrack.title,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <Ionicons
              name="caret-back-outline"
              color={GlobalStyle.primary}
              size={20}
            />
          </TouchableOpacity>
        ),
      });
    }
  }, [currentTrack]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: GlobalStyle.primary,
          justifyContent: 'center',
        }}>
        {currentTrack && currentTrack.audiofile ? (
          <AudioPlayer url={currentTrack.audiofile[0].url} />
        ) : (
          <ActivityIndicator color={GlobalStyle.tertiary} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Player;
