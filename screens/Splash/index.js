import React from "react"
import {Text, View, SafeAreaView, Image} from 'react-native'
import styles from './styles'

class Splash extends React.Component{
    
    render(){
        this.props.navigation.navigate('LoginSignUp');
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.Circles}>
                <Image style={styles.GreenSideCircle} source={require('../../assets/greenCircle.png')}/>
                <View style={styles.TwoSmallScircles}>
                <Image style={styles.GrayCircle} source={require('../../assets/grayCircle.png')}/>
                <Image style={styles.SkyCircle} source={require('../../assets/skyCircle.png')}/>
                </View>
                </View>
                <View style={styles.LogoAndOtherContent}>
                <Image style={styles.SplashLogo} source={require('../../assets/splashLogo.png')}/>
                <View style={styles.SloganText}>
                <Text style={styles.WeDreamBuildText}>We dream, build, and work to build a Better Columbus</Text>
                </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default Splash