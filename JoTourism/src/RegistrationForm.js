import React,{Component} from 'react';
import {KeyboardAvoidingView ,Image} from 'react-native';
import EmailText from './EmailText';
import PasswordText from './PasswordText';
import RegisterButton from './RegisterButton'
import PhoneNumberText from './PhoneNumberText';
 
export default class RegistrationForm  extends Component{
    constructor(props){
        super(props)
        this.state={
            EmailValue:"",
            PasswordValue:"",
            phoneNumberValue:"",
        }
    }
    
    EmailUpdated=(value)=>{
         this.setState({EmailValue:value})
    }

    PasswordUpdated=(value)=>{
         this.setState({PasswordValue:value})
    }

    PhoneNumberUpdated=(value)=>{
         this.setState({phoneNumberValue:value})
    }
   
    render(){
        return(
            <KeyboardAvoidingView style={{flex:1,justifyContent:'center',alignItems:"center"}} behavior="padding" enabled>
                 <EmailText ParentEmailChanged={this.EmailUpdated}/>
                 <PhoneNumberText ParentPhoneNumberChanged={this.PhoneNumberUpdated}/>
                 <PasswordText PasswordChanged={this.PasswordUpdated}/>
                 <RegisterButton navigation={this.props.navigation} email={this.state.EmailValue} pwd={this.state.PasswordValue} mob={this.state.phoneNumberValue}/>
             </KeyboardAvoidingView>
            )
    }
}