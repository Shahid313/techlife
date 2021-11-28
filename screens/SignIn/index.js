import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, TextInput} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import styles from './styles'

class SignIn extends React.Component{

    state = {
        showPass:true
    }

    Login(){
        this.props.navigation.navigate('Interest')
    }

    ForgotPassword(){
        this.props.navigation.navigate('ForgotPass')
    }

    GoToSignUp(){
        this.props.navigation.navigate('SignUp')
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
                <View style={styles.LoginInfo}>
                    <Text style={styles.LoginText}>Login</Text>
                    <Text style={styles.EnterEmailText}>Enter your email address and password to access your account</Text>
                </View>
                <View style={styles.EnteringData}>
                    <TextInput style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Email"/>
                    
                <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput placeholderTextColor="#929292" secureTextEntry={this.state.showPass} placeholder="Password" style={styles.InputField}/>

            </View>
            <View style={styles.ForgotPasswordButton}>
            <TouchableOpacity onPress={() => this.ForgotPassword()}>
            <Text style={styles.ForgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.Login()} style={styles.LoginButton}>
                    <Text style={styles.LoginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.Line}>
                <View style={styles.LeftLine}></View>
                <Text style={styles.OR}>or</Text>
                <View style={styles.RightLine}></View>
            </View>
            <View style={styles.SocialMediaButtons}>
                <TouchableOpacity style={styles.GoogleBbutton}>
                <Image style={styles.googleIcon} source={require('../../assets/googleIcon.png')}/>
                    <Text style={styles.GoogleButtonText}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.FacebookBbutton}>
                <Image style={styles.facebookIcon} source={require('../../assets/facebookIcon.png')}/>
                    <Text style={styles.FacebookButtonText}>Facebook</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.DontHaveAccount}>
                <Text style={styles.DontHaveAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => this.GoToSignUp()} style={styles.SignUpLink}>
                    <Text style={styles.DontHaveAccountSignUpLink}>Sign Up</Text>
                </TouchableOpacity>
            </View>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default SignIn;