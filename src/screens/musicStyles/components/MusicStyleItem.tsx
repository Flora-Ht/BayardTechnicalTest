import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyle } from '../../../utils/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type MusicStyleItemProps = {
  musicStyle: MusicStyle;
  onPress: (musicStyle: MusicStyle) => void;
};

const MusicStyleItem = (props: MusicStyleItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.musicStyle)}
      style={styles.container}>
      <Text style={styles.artistName}>{props.musicStyle.title}</Text>
      <Ionicons
        name="chevron-forward-sharp"
        color={GlobalStyle.secondary}
        size={20}
      />
    </TouchableOpacity>
  );
};

export default MusicStyleItem;

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
