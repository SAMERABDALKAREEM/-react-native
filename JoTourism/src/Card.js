import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'


export default class Card extends React.PureComponent{
 
render(){
    return(  
     <TouchableOpacity style={{flex:1}} onPress={()=>{
        this.props.navigation.setParams({ latitude:this.props.Item.latitude , longitude:this.props.Item.longitude });
        this.props.navigation.navigate("TabNav");
    }}>
      <View style={{borderBottomColor:"grey",borderBottomWidth:1,padding:5,flex:1,flexDirection:'row'}}>
        <Image source={{uri: this.props.Item.imageUrl}} style={{height:80,width:80}} />
        <Text style={{fontSize:18,fontWeight:'600',marginLeft:10 , marginTop:8 ,color:"grey"}}>{this.props.Item.area}</Text>
       </View>     
   </TouchableOpacity> )
}
}