import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {BluetoothList} from "../bluetooth/BluetoothList.js";
import {DeviceDetails} from "../bluetooth/DeviceDetails.js";

const Stack = createNativeStackNavigator();

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
        <Stack.Screen name="deviceDetails" component={DeviceDetails} />
      </Stack.Navigator>
  )
}
