/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Screens} from "./src/modules/screens/Screens";
import {SafeAreaView,StatusBar,Text} from "react-native";
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from "./src/shared/redux/store";
import { LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
const App: () => Node = () => {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
