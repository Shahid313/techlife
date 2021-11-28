import React from "react"
import { SafeAreaView, Text, View, Image } from "react-native"
import styles from "./styles"

class Saved extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.Container}>
                <View style={styles.NotFoundContent}>
                    <Image style={styles.NothingFoundImage} source={require('../../assets/nothingfound.png')}/>
                    <Text style={styles.OOPs}>OOPs!</Text>
                    <Text style={styles.NoSavedEventsText}>It seems you haven’t have any saved events</Text>
                    <Text style={styles.GoHomeAndSaveEvents}>Just Go to Home Page and save events there</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Saved