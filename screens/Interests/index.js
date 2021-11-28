import React from "react"
import {Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import styles from "./styles"
import Cards from "./Cards"

class Interests extends React.Component{
    UpComingEvents(){
        this.props.navigation.navigate('HomeScreen')
    }
    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                <View style={styles.container}>
                <View style={styles.InterestInfo}>
                    <Text style={styles.PickInterests}>Pick your interests</Text>
                    <Text style={styles.InfoToPersonalizeFeed}>We’ll use this info to personalize your feed to recommend things you’ll like.</Text>
                </View>
                <Cards/>
                
                <TouchableOpacity onPress={() => this.UpComingEvents()} style={styles.ContinueButton}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Interests