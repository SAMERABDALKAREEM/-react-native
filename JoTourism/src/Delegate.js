import React from 'react';
import { View } from 'react-native';
import { AsyncStorage } from "react-native"



export default class Delegate extends React.PureComponent { 

 render() {

    return(
        <View></View>
    )
 }
 componentWillMount() {
    try {
        const value = await AsyncStorage.getItem('loginFlag');
        if (value == 'true') {
          this.props.navigation.navigate("CardsListPage");
        } else { 
          this.props.navigation.navigate("Register");
      }
       } catch (error) {
        console.log(error);
        }
    }
 }

 