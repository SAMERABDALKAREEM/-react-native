import React from 'react';
import { StyleSheet, FlatList,Text} from 'react-native';
import Card from './Card';
 
export default class CardsList extends React.Component {
  render() {
    return (
     <FlatList data={scenes} 
     renderItem={({item})=>
      <Card navigation={this.props.navigation} Item={item}/>
    }
     />
    )
  }
}
  
const scenes = [
 {
   key:"1",
   area:"Dead Sea",
   imageUrl:"https://bit.ly/2PNftGr",
   latitude:31.9454,
   longitude:35.9284,
 } , 
 {
   key:"2",
   area:"Petra",
   imageUrl:"https://bit.ly/2PP5qR2",
   latitude:31.9454,
   longitude:35.9284,
 },
 {
  key:"3", 
  area:"Amman",
  imageUrl:"https://bit.ly/2PP5qR2",
  latitude:31.9454,
  longitude:35.9284,
} ,
{
  key:"4",
  area:"Aqaba",
  imageUrl:"https://bit.ly/2FDE4ZE"
} , 
{
  key:"5",
  area:"Wadi Rum",
  imageUrl:"https://bit.ly/2BpzWsa",
  latitude:31.9454,
  longitude:35.9284, 
},
{
 key:"6",
 area:"Jerash",
 imageUrl:"https://bit.ly/2PP5qR2",
 latitude:31.9454,
 longitude:35.9284, 
}
]
 
