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
import { Provider } from 'react-redux'
import store from "./src/shared/redux/store";

const App: () => Node = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
