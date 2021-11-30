import React from "react";
import {useState, useEffect} from "react";
import { View, FlatList,ImageBackground, ScrollView, TouchableOpacity} from "react-native"
import {Text, Avatar, Card, ListItem, Icon, Button} from  "react-native-elements";
import {useSelector} from "react-redux";
import {deviceSelector} from "../../shared/redux/deviceSlice";
import {ScanComponent} from "./components/scanComponent";
import {ListDevicesComponent} from "./components/listDevicesComponent";
import {HeaderComponent} from "../../shared/components/header";
const image = require('../../shared/assets/imagenFondo.jpg');
import {flex} from "../../shared/styles/flex";



export const DeviceDetails = ({navigation})=>{

  const [expanded, setExpanded] = useState([false,false,false]);
  const {selectedDevice} =useSelector(
    deviceSelector
  );

  const manageState = (list, current)=>{
    const newList = list.map(
      (item, index)=>{
        if (index === current) {
          return !item;
        }
        else{
          return false;
        }
      }
    )

    return newList;
  }


  return (

    <View resizemode="center" style={{flex:1}}>
      <HeaderComponent
        CenterContent={
          ()=>(<Text h3 style={{color:"white"}}>Bluetooth App</Text>)
        }
      />
      <View style={[{flex:1, margin:15, backgroundColor:"#f4f4f4", borderRadius:10, padding:10}, shadow]}>
        <View style={[{flex:1},flex.PerfectCenter ]}>
          <Avatar
            size="xlarge"
              overlayContainerStyle={{backgroundColor: '#74dbff'}}
            rounded
            icon={{name: 'bluetooth', type: 'font-awesome'}}
          />
        </View>
        <View style={{flex:3}}>
        <View style={[flex.PerfectCenter,{padding:5}]}>
          <Text h4>{selectedDevice.name}</Text>
        </View>

        <ListItem.Accordion
          content={
            <>
              <Icon name="place" size={30} />
              <ListItem.Content>
                <ListItem.Title>Details</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded[0]}
          onPress={() => {
            const prev = [...expanded];

            setExpanded(manageState(prev,0));
          }}
        >

           <ListItem key={1} bottomDivider>
             <ListItem.Content>
               <ListItem.Title>ID: {selectedDevice.id}</ListItem.Title>
             </ListItem.Content>

           </ListItem>
           <ListItem key={2} bottomDivider>
             <ListItem.Content>
               <ListItem.Title>Service UUIDs: {selectedDevice.serviceUUIDs === null ? "null" : selectedDevice.serviceUUIDs }</ListItem.Title>
             </ListItem.Content>

           </ListItem>
           <ListItem key={2} bottomDivider>
             <ListItem.Content>
               <ListItem.Title>Local Name: {selectedDevice.localName === null ? "null" : selectedDevice.localName }</ListItem.Title>
             </ListItem.Content>

           </ListItem>

        </ListItem.Accordion>
        <ListItem.Accordion
          content={
            <>
              <Icon name="place" size={30} />
              <ListItem.Content>
                <ListItem.Title>Services</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded[1]}
          onPress={() => {
            const prev = [...expanded];

            setExpanded(manageState(prev,1));
          }}
        >

           <ListItem key={3} bottomDivider>
             <ListItem.Content>
               <ListItem.Title>Service Data {selectedDevice.serviceData}</ListItem.Title>
             </ListItem.Content>
           </ListItem>
           <ListItem key={4} bottomDivider>
             <ListItem.Content>
               <ListItem.Title>Service UUIDs {selectedDevice.serviceUUIDs}</ListItem.Title>
             </ListItem.Content>
           </ListItem>

        </ListItem.Accordion>
        <ListItem.Accordion
          content={
            <>
              <Icon name="place" size={30} />
              <ListItem.Content>
                <ListItem.Title>Logs</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded[2]}
          onPress={() => {
            const prev = [...expanded];

            setExpanded(manageState(prev,2));
          }}
        >
          <ScrollView style={{height:100, width:"100%", backgroundColor:"black"}}>
            <View style={[flex.flexWrap, flex.Column, {padding:5}]}>
            {
              [1,2,3,4,5,6,7,8,9].map(
                (i,j)=>(<Text style={{color:"green"}}>{`${new Date()} : Log ${j}`}</Text>)
              )
            }
            </View>
          </ScrollView>
        </ListItem.Accordion>
        </View>
      </View>
    </View>
  )
}

const shadow = {
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
}
