import React from "react";
import {useState, useEffect} from "react";
import { View, FlatList,ImageBackground, Alert} from "react-native"
import {Text} from  "react-native-elements";
import {ScanComponent} from "./components/scanComponent";
import {ListDevicesComponent} from "./components/listDevicesComponent";
import {HeaderComponent} from "../../shared/components/header";
import { BleManager } from 'react-native-ble-plx';
const image = require('../../shared/assets/imagenFondo.jpg');
import {requestLocationPermission} from "../../shared/utils/bluetoothPermision"
import {useSelector,useDispatch} from "react-redux"
import {setDeviseSelected,deviceSelector} from "../../shared/redux/deviceSlice";


export const BluetoothList = ({navigation})=>{
  const dispatch = useDispatch();
  const [list, setList] = useState(null);
  const dis = (value) => {
      const dispatch = useDispatch();
      dispatch(setDeviseSelected(value));
      console.log(value, "12dfdsafdsafdsafdsa3")
  }

  const manager = new BleManager();


  useEffect(
      ()=>{
      const subscription = manager.onStateChange(async(state) => {

        if (state === 'PoweredOn') {
          const permission = await requestLocationPermission();


          if (permission) {

            manager.startDeviceScan(null, null, async (error, device) => {

            if (device.name.indexOf("test")>-1) {
              manager.stopDeviceScan();

              device.connect()
              .then((item) => {
                  return item.discoverAllServicesAndCharacteristics()
              })
              .then((item) => {
                console.log(item)
                dispatch(setDeviseSelected(item));
                setList([item]);

              })
              .catch((item) => {
                  // Handle errors
              });

            }


          });
          }

        }
    }, true);
    },
    []
  )







  const scan = ()=>{

  }




  return (

    <View resizemode="center" style={{flex:1}}>
      <HeaderComponent
        CenterContent={
          ()=>(<Text h3 style={{color:"white"}}>Bluetooth App</Text>)
        }
      />

      {
        list === null
        ? (
          <ScanComponent />
        )
        : (
          <ListDevicesComponent list={list} navigation={navigation}/>
        )
      }

    </View>
  )
}
