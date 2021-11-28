import React from 'react'
import {View,Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'

class Profile extends React.Component{
    render(){
        return(
            <ScrollView>
            <LinearGradient  colors={['#5FA7C0', '#5FA7C0','#91C73E']} style={{width:'100%',height:Dimensions.get('window').width*2/8,alignItems:'center',justifyContent:'center'}}>
                <View >
                
                
                <View style={{width:120,height:120,borderRadius:100,backgroundColor:'gray',position:'relative',borderColor:'gray',borderWidth:1,top:60,}}>

                <View style={{borderColor:'white',borderWidth:5,borderRadius:120,position:'relative',height:120,alignItems:'center',justifyContent:'center'}}>
                <Image source={require('../../assets/icon.png')} />
                
                </View>


                </View>
              

                </View>
                </LinearGradient>


                <View style={{marginTop:'15%',flexDirection:'row',padding:'4%',width:'95%'}}>
                <AntDesign name="user" size={30} style={{top:20,color:'gray',opacity:.3}}/>

                <View style={{width:'90%',left:20}}>
                    <Text style={{color:'black'}}>Name</Text>
                    <TextInput placeholder="Name" style={{borderBottomWidth:.3,borderColor:'gray',width:'100%'}}/>
                </View>
                </View>

                <View style={{marginTop:10,flexDirection:'row',paddingRight:'4%', paddingLeft:'4%', paddingTop:10, paddingBottom:10, width:'95%'}}>
                <Fontisto name="email" size={30} style={{top:20,color:'gray',opacity:.3}}/>

                <View style={{width:'90%',left:20}}>
                    <Text style={{color:'black'}}>Email</Text>
                    <TextInput placeholder="Email" style={{borderBottomWidth:.9,borderColor:'gray',width:'100%'}}/>
                </View>
                </View>


                <View style={{marginTop:10,flexDirection:'row',paddingRight:'4%', paddingLeft:'4%', paddingTop:10, paddingBottom:10,width:'95%'}}>
                <Image source={require('../../assets/prefences.png')} style={{width:30,height:30,top:20}}/>



                <View style={{width:'90%',left:20}}>
                    <Text style={{color:'black'}}>prefences</Text>
                    
                    <View style={{flexDirection:'row',width:'90%',flexWrap:'wrap',justifyContent:'space-between',top:20}}>
                        <TouchableOpacity style={{padding:5,alignItems:'center',justifyContent:'center',borderColor:'gray',borderWidth:1,borderRadius:20,marginTop:5,}}>
                            <Text>Nature</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={{padding:5,alignItems:'center',justifyContent:'center',borderColor:'gray',borderWidth:1,borderRadius:20,marginTop:5,}}>
                            <Text>Tech</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{padding:5,alignItems:'center',justifyContent:'center',borderColor:'gray',borderWidth:1,borderRadius:20,marginTop:5,}}>
                            <Text>Politics</Text>
                        </TouchableOpacity>



                        
                        <TouchableOpacity style={{padding:5,alignItems:'center',justifyContent:'center',borderColor:'gray',borderWidth:1,borderRadius:20,marginTop:5,}}>
                            <Text>Politics</Text>
                        </TouchableOpacity>


                        
                        <TouchableOpacity style={{padding:5,alignItems:'center',justifyContent:'center',borderColor:'gray',borderWidth:1,borderRadius:20,marginTop:5,}}>
                            <Text>Politics</Text>
                        </TouchableOpacity>

                        
                        <TouchableOpacity style={{padding:5,alignItems:'center',justifyContent:'center',borderColor:'gray',borderWidth:1,borderRadius:20,marginTop:5,}}>
                            <Text>Add more+</Text>
                        </TouchableOpacity>

                    </View>


                   
                </View>
                </View>


                <TouchableOpacity style={{backgroundColor:'#5FA7C0',borderColor:'#5FA7C0',borderWidth:1,borderRadius:10,marginRight:'5%', marginLeft:'5%', marginTop:'5%', marginBottom:'5%',alignItems:'center', justifyContent:'center',width:'90%', height:45 ,marginTop:80}}>
                    <Text style={{color:'white',fontWeight:'bold', fontSize:16}}>Update</Text>
                </TouchableOpacity>


            </ScrollView>
        )
    }
}

export default Profile