import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyle } from '../../utils/styles';
import { ArtistsNavigatorParamList } from '../../navigators/ArtistsNavigatorParamList';

const ArtistDetails = ({
  route,
  navigation,
}: NativeStackScreenProps<ArtistsNavigatorParamList, 'ArtistDetails'>) => {
  const artist = route.params?.artist;

  useEffect(() => {
    navigation.setOptions({ title: artist.name });
  }, []);

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
        }}></ScrollView>
    </SafeAreaView>
  );
};

export default ArtistDetails;
