import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyle } from '../../../utils/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type ArtistProps = {
  artist: Artist;
  onPress: (artist: Artist) => void;
};

const ArtistItem = (props: ArtistProps) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.artist)}
      style={styles.container}>
      <Text style={styles.artistName}>{props.artist.name}</Text>
      <Ionicons
        name="chevron-forward-sharp"
        color={GlobalStyle.secondary}
        size={20}
      />
    </TouchableOpacity>
  );
};

export default ArtistItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: GlobalStyle.secondary,
    borderBottomWidth: 1,
    width: '100%',
    padding: 10,
  },
  artistName: {
    color: GlobalStyle.primary,
    fontSize: 15,
  },
});
