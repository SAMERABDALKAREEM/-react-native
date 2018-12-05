import React from 'react'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import ServicesTab from "./ServicesTab";
import BookingDetailsTab from "./BookingDetailsTab";
import LocationTab from "./LocationTab";

export default class myTopTabNavigator extends React.Component{

  render(){
    const ConstNavigator = createAppContainer(createMaterialTopTabNavigator({
      services:{screen:ServicesTab,navigationOptions: { title: 'Services' }},
      bookingDetails:{screen:BookingDetailsTab,navigationOptions: { title: 'Booking' }},
      LocationTab:{
        screen:LocationTab,
        params:{latitude:this.props.navigation.getParam("latitude"),longitude:this.props.navigation.getParam("longitude")},
        navigationOptions: { title: 'Map' }},
    }, 
    {
      tabBarOptions: {
        
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#298e82',
        },
      }
    } , {
      initialRouteName:"services"
    }
    ));
    //createAppContainer(navigator)
    return(<ConstNavigator />)
  }
  
}