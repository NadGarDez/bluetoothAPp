import * as React  from "react";
import {Text} from "react-native"
import {useSelector} from "react-redux";
import {deviceSelector} from "../../shared/redux/deviceSlice";


export const BluetoothList = ()=>{
  console.log(deviceSelector);
  const sel= useSelector(
    state => deviceSelector(state)
  )

  return (

    <Text style={{fontSize:50}}>Hey {sel}</Text>
  )
}
