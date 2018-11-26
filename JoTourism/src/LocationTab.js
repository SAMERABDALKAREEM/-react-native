import React, { Component } from 'react';
import { MapView } from 'expo';
import {View,Text,Image,TouchableOpacity,Button} from 'react-native'

 
  
export default class LocationTab extends Component {

   constructor(props){ 
    super(props)

    this.state = { 
      latitudeValue :this.props.navigation.getParam('latitude'),
      longitudeVlue :this.props.navigation.getParam('longitude'),
    }
   }


  render() {
    return (
      <MapView style={{ flex: 1 }}
      initialRegion={{
      latitude:this.state.latitudeValue,
      longitude:this.state.longitudeVlue
      }} />
    );
  }
}
 
 