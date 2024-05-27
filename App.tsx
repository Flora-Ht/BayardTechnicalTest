import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { RootNavigator } from './src/navigators';

// const useInitPlayer = () => {
//   useEffect(() => {
//     TrackPlayer.setupPlayer();

//     return () => {
//       TrackPlayer.reset();
//     };
//   }, []);
// };

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // useInitPlayer();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
