import React from 'react';
import { View, FlatList,Text} from 'react-native';
import Card from './Card';
 
export default class SceneServicesList extends React.Component {
  render() {
    return (
     <FlatList data={services} 
     renderItem={({item})=>

     <View style={{borderBottomColor:"grey",borderBottomWidth:1,padding:5,flex:1,flexDirection:'row'}}>
        <Text>{item.service}{item.key}</Text>
     </View>
        }
     />
    )
  }
}

const services = [
    {
      key:"1",
      service:"service",
     } , 
    {
      key:"2",
      service:"service",
     },
    {
     key:"3", 
     service:"service",
    } ,
   {
     key:"4",
     service:"service",
    } , 
   {
     key:"5",
     service:"service",
    },
   {
    key:"6",
    service:"service",
    }
   ]
   