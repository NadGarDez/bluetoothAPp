import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {BluetoothList} from "../bluetooth/BluetoothList.js";

const Stack = createNativeStackNavigator();
console.log(BluetoothList);
export const Screens = ()=>{
  return (
      <Stack.Navigator
        screenOptions={
                    {
            headerShown: false
          }
        }
      >
        <Stack.Screen name="bluetoothList" component={BluetoothList} />
      </Stack.Navigator>
  )
}
