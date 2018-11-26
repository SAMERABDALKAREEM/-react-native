import React, { Component } from 'react'
import {View,Text} from 'react-native'
import DatePicker from 'react-native-datepicker'
 
export default class BookingDetailsTab extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2018-05-1"}
  }
 
  render(){
    return (
      <View>
        
      <Text>Trip Location : Aqaba</Text>
      <Text>Cost Of this trip is: 199 $</Text>
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2018-05-01"
        maxDate="2019-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
       </View>
     
    )
  }
}