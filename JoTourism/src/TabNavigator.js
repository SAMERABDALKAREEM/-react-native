import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import ServicesTab from "./ServicesTab";
import BookingDetailsTab from "./BookingDetailsTab";
import LocationTab from "./LocationTab";


const navigator = createMaterialTopTabNavigator({
    services:{screen:ServicesTab,navigationOptions: { title: 'Services' }},
    bookingDetails:{screen:BookingDetailsTab,navigationOptions: { title: 'Booking' }},
    LocationTab:{screen:LocationTab,navigationOptions: { title: 'Map' }},
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
  );
  
  export default createAppContainer(navigator);