import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    Container:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'#FFFFFF'
    },

    NotFoundContent:{
        alignItems:'center'
    },
    NothingFoundImage:{
        width:90, 
        height:90
    },

    OOPs:{
        color:'#565656', 
        fontSize:48, 
        marginTop:'7%', 
        fontWeight:'bold'
    },

    NoSavedEventsText:{
        color:'#565656', 
        fontSize:16, 
        marginTop:'5%', 
        fontWeight:'bold'
    },

    GoHomeAndSaveEvents:{
        color:'#C1BEBE', 
        fontSize:15, 
        marginTop:'2%', 
        fontWeight:'bold'
    },
})

export default styles;