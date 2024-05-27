import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArtistDetails, ArtistsHome, Player } from '../screens';
import { RootNavigatorParamList } from './RootNavigatorParamList';
import { TabNavigator } from '.';

const RootStack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabNavigation"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name="Player" component={Player} />
    </RootStack.Navigator>
  );
};
