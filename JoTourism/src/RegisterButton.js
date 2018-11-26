import React from 'react'
import {Text,Dimensions,TouchableOpacity} from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height

export default class RegisterButton extends React.PureComponent { 
  
render() {
    return(
    <TouchableOpacity 
     style={{width:width*0.7,height:height*0.06,backgroundColor:'#298e82',
     marginTop:44,flexDirection:'row',justifyContent:'center',alignItems:'center'}}
     onPress={this.registerUser}>
      <Text style={{color:"white",fontWeight:'600',fontSize:15}}>Register</Text>
    </TouchableOpacity>
    );
}

 registerUser=()=>{
       this.props.navigation.navigate("CardsListPage");
}


}

 