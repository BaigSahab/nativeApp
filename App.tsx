/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import DrawerComponent from './components/drawer';
import { Provider } from 'react-redux';
import { store } from './store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <Provider store={store}>
      <DrawerComponent />
    </Provider>
    // <SafeAreaView>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //   // backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //   >
    // <Header /> 
    //   </ScrollView>
    // </SafeAreaView >
  );
}

export default App;
