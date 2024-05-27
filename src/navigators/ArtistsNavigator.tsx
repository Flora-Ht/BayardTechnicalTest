import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArtistDetails, ArtistsHome } from '../screens';
import { ArtistsNavigatorParamList } from './ArtistsNavigatorParamList';

const ArtistsStack = createNativeStackNavigator<ArtistsNavigatorParamList>();

export const ArtistsNavigator = () => {
  return (
    <ArtistsStack.Navigator>
      <ArtistsStack.Screen
        name="ArtistsHome"
        component={ArtistsHome}
        options={{
          headerShown: false,
        }}
      />
      <ArtistsStack.Screen name="ArtistDetails" component={ArtistDetails} />
    </ArtistsStack.Navigator>
  );
};
