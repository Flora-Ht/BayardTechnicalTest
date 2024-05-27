import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArtistItem from './components/ArtistItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GlobalStyle } from '../../utils/styles';
import { ArtistsNavigatorParamList } from '../../navigators/ArtistsNavigatorParamList';

const Artists: Artist[] = [
  {
    id: 1,
    name: 'Evanescence',
  },
  {
    id: 2,
    name: 'Zayde Wolf',
  },
  {
    id: 3,
    name: 'Sia',
  },
  {
    id: 4,
    name: 'Isaak',
  },
  {
    id: 5,
    name: 'Hiroyuki Sawano',
  },
  {
    id: 6,
    name: 'Hatsune Miku',
  },
  {
    id: 7,
    name: 'Vanessa Paradis',
  },
  {
    id: 8,
    name: 'Imagine Dragons',
  },
  {
    id: 9,
    name: 'Radwimps',
  },
];

const ArtistsHome = ({
  route,
  navigation,
}: NativeStackScreenProps<ArtistsNavigatorParamList, 'ArtistsHome'>) => {
  const onArtistPress = (artist: Artist) => {
    navigation.navigate('ArtistDetails', { artist });
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
        {Artists.map(item => {
          return (
            <ArtistItem key={item.id} artist={item} onPress={onArtistPress} />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistsHome;
