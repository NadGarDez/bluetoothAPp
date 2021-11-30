import React from "react";
import {Card} from "react-native-elements";
import {View, FlatList} from "react-native";
import {List} from "../../../shared/components/list"
import {flex} from "../../../shared/styles/flex";


export const ListDevicesComponent = ({list, navigation})=>{
  console.log(list);

  const data = list.map(
    item =>{
      return {

          title:item.name,
          subtitle:item.id,
          tipe:"icon",
          icon:{name: 'bluetooth', type: 'font-awesome', color:'blue'}

      }
    }
  )
  return (
    <View style={{flex:1}}>
      <Card>
        <Card.Title>List Devices</Card.Title>
        <Card.Divider/>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          extraData={navigation}
          renderItem={(item)=><List item={item} navigation={navigation} />}
        />
      </Card>
    </View>
  )
}
