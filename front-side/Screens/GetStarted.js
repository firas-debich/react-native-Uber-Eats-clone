import React from 'react'
import { Image,View, Text ,ImageBackground,StyleSheet } from 'react-native'

import { TouchableOpacity } from 'react-native'




export default function GetStarted({navigation}) {
    return (
        <>
    <ImageBackground  resizeMode="cover" style={{
          flex: 1,
          flexDirection:'column',
          alignItems:'center',
          position:'relative',
          justifyContent:"space-around"
          
        
    }} source={
       require("../assets/images/Hamburger-ketchup-french-fries_iphone_1080x1920.jpg")
    }>
        
            <Logo/>
        <View style={{
            
            alignSelf:"flex-start"
        }}><Text style={{
            color:"white",
        }}>
            Our Food 
            </Text> 
            
            <Text style={{
            color:"white",
        }}>TastyFood</Text> 
            </View>
     <Button/>
        </ImageBackground>       
        </>
    )
}




const Button = ()=>(

    <TouchableOpacity style={{
        backgroundColor:"white",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 30,
        width: 300,
        marginTop: 20,
        flexDirection: "row",
        position: "relative",
        
    }} onPress={()=>navigation.navigate("Home")}>

    <Text style={{
        fontSize: 20,
        fontWeight: "bold",
        flex:1,
        textAlign:'center'
    }}>Get Started</Text>
   
    </TouchableOpacity>
)

const Logo = ()=>(
   
    <Image
    style={{ width: "30%", height: 120 ,borderRadius:380}}
    source={
       require("../assets/icons/splash1.png")
    }
  />
)