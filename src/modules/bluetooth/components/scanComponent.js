import React, {useState} from "react";
import {View} from "react-native"
import {Text, Button} from "react-native-elements";
import {flex} from "../../../shared/styles/flex";

export const ScanComponent = ({action})=>{
  const [loading, setLoading] = useState(false);
  return (
    <View style={[flex.PerfectCenter, {flex:1}]}>
      <View style={[flex.Column,flex.spaceArount]}>
        <Text h1>Welcome</Text>
        <Button type="outlined" title="Scan Bluetooth Devices" loading
        />
      </View>
    </View>
  )
}
