import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, TextInput} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import styles from './styles'

class SignUp extends React.Component{

    state = {
        showPass:true,
        showConfirmPass:true
    }

    GoToLogin(){
        this.props.navigation.navigate('SignIn')
    }
    
    GoBack(){
        this.props.navigation.goBack()
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={() => this.GoBack()} style={styles.Back}>
                    <Image style={styles.BackArrow} source={require('../../assets/Arrow.png')}/>
                    <Text style={styles.BackText}>Back</Text>
                </TouchableOpacity>
                <View style={styles.SignUpInfo}>
                    <Text style={styles.SignUpText}>Sign up</Text>
                    <Text style={styles.EnterInfoText}>Please fill information to create an account and sign up to continue</Text>
                </View>
                <View style={styles.EnteringData}>
                    <TextInput style={styles.NameInput} placeholderTextColor="#929292" placeholder="Name"/>
                    <TextInput style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Email"/>
                    
                <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass: !(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass: !(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput placeholderTextColor="#929292" secureTextEntry={this.state.showPass} placeholder="Password" style={styles.InputField}/>

               </View>
               <View style={styles.ConfirmPasswordInput}>
                {this.state.showConfirmPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showConfirmPass:!(this.state.showConfirmPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showConfirmPass:!(this.state.showConfirmPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput placeholderTextColor="#929292" secureTextEntry={this.state.showConfirmPass} placeholder="Confirm Password" style={styles.InputField}/>

               </View>
            <TouchableOpacity style={styles.SignUpButton}>
                    <Text style={styles.SignUpButtonText}>Sign up</Text>
            </TouchableOpacity>

            <View style={styles.AlreadyHaveAccount}>
                <Text style={styles.AlreadyHaveAccountText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => this.GoToLogin()} style={styles.SignInLink}>
                    <Text style={styles.AlreadyHaveAccountSignInLink}>Login</Text>
                </TouchableOpacity>
            </View>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default SignUp;