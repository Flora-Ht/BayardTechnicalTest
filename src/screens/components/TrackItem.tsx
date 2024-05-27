import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalStyle } from '../../utils/styles';
import { useDispatch, useSelector } from 'react-redux';
import { favoritesSelector } from '../../redux/favorites/selectors';
import {
  addFavorite,
  getFavTrackById,
  removeFavorite,
} from '../../redux/favorites/actions';

type TrackItemProps = {
  track: Track;
  // onPress: (artist: Artist) => void;
};

const TrackItem = (props: TrackItemProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector(favoritesSelector);

  const isFavorite = () => {
    return favorites.find(favorite => favorite == props.track.id) != undefined;
  };

  useEffect(() => {
    console.log('Favorites', favorites);
  }, [favorites]);

  const toggleFavorite = () => {
    if (isFavorite()) {
      dispatch(removeFavorite(props.track.id));
    } else {
      dispatch(addFavorite(props.track.id));
      dispatch(getFavTrackById(props.track.id));
    }
  };

  return (
    <TouchableOpacity
      // onPress={() => props.onPress(props.artist)}
      style={styles.container}>
      <Text style={styles.artistName}>{props.track.title}</Text>

      <TouchableOpacity onPress={toggleFavorite}>
        {isFavorite() ? (
          <Ionicons
            name="heart-sharp"
            color={GlobalStyle.secondary}
            size={20}
          />
        ) : (
          <Ionicons
            name="heart-outline"
            color={GlobalStyle.secondary}
            size={20}
          />
        )}
      </TouchableOpacity>

      <Ionicons
        name="chevron-forward-sharp"
        color={GlobalStyle.secondary}
        size={20}
      />
    </TouchableOpacity>
  );
};

export default TrackItem;

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
    flex: 1,
  },
});
