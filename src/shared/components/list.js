import React from "react";
import { ListItem, Avatar , Icon} from 'react-native-elements';
import {TouchableOpacity} from "react-native"


export const List = ({item,navigation})=>{

  console.log(item);
  return (
    <>
    <ListItem key={item.index}
      bottomDivider
      onPress={
        ()=>navigation.navigate('deviceDetails')
      }
    >
    <Avatar
      size="medium"
      rounded
      icon={{name: 'bluetooth', type: 'font-awesome', color:"#f8f8ff"}}
      overlayContainerStyle={{backgroundColor: '#74dbff'}}
    />


       <ListItem.Content>
         <ListItem.Title>{item.item.title}</ListItem.Title>
         <ListItem.Subtitle>{item.item.subtitle}</ListItem.Subtitle>
       </ListItem.Content>

     </ListItem>
    </>
  )
}
