import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MusicStylesNavigatorParamList } from './MusicStylesNavigatorParamList';
import { MusicStyleDetails, MusicStylesHome } from '../screens';

const MusicStylesStack =
  createNativeStackNavigator<MusicStylesNavigatorParamList>();

export const MusicStylesNavigator = () => {
  return (
    <MusicStylesStack.Navigator>
      <MusicStylesStack.Screen
        name="MusicStylesHome"
        component={MusicStylesHome}
        options={{
          headerShown: false,
        }}
      />
      <MusicStylesStack.Screen
        name="MusicStyleDetails"
        component={MusicStyleDetails}
      />
    </MusicStylesStack.Navigator>
  );
};
