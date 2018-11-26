import { createStackNavigator,createAppContainer,createMaterialTopTabNavigator} from 'react-navigation'
import RegistrationForm from './RegistrationForm';
import CardsList from './CardsList';
import TabNavigator from './TabNavigator';
  
const navigator = createStackNavigator({
    Register:{
        screen:RegistrationForm,
        navigationOptions: {
            title: 'Jo Tourism',                                                                                        
            headerStyle: {                                                                                        
              backgroundColor: '#298e82',                                                                           
            },                                                                                                    
            headerTintColor: '#fff',                                                                              
            headerTitleStyle: {                                                                                   
              fontWeight: 'bold',                                                                                   
              fontFamily: 'Roboto'                                                                                  
            }
          }
        
        } , CardsListPage: {
        screen:CardsList,
        navigationOptions: {
            title: 'Scene List',                                                                                        
            headerStyle: {                                                                                        
              backgroundColor: '#298e82',                                                                           
            },                                                                                                    
            headerTintColor: '#fff',                                                                              
            headerTitleStyle: {                                                                                   
              fontWeight: 'bold',                                                                                   
              fontFamily: 'Roboto'                                                                                  
            }
          }
    } , TabNav:{
        screen:TabNavigator,
        navigationOptions: {
            title: 'Jo Tourism',                                                                                        
            headerStyle: {                                                                                        
              backgroundColor: '#298e82',                                                                           
            },                                                                                                    
            headerTintColor: '#fff',                                                                              
            headerTitleStyle: {                                                                                   
              fontWeight: 'bold',                                                                                   
              fontFamily: 'Roboto'                                                                                  
            }
          }
    }
},
{
initialRouteName:"Register"
})

export default createAppContainer(navigator)