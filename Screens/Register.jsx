import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import SafeAreaAndView from '../Components/SafeAreaAndView'
import { Button, Checkbox, Headline, TextInput } from 'react-native-paper'

const Main = ({navigation}) => {
    const[check , setCheck]=useState(false)
  return (
    <View>
        <Headline style={styles.heading}>Register</Headline>
  <TextInput placeholder='Full Name' style={styles.input}/>
  <TextInput placeholder='Email' style={styles.input}/>
  <TextInput placeholder='Password' secureTextEntry={true} style={styles.input}/>
  <View style={{alignItems:"center",flexDirection:"row", marginHorizontal:64}}>
  <Checkbox onPress={()=>setCheck((prev)=>!prev)}status={check ? 'checked' : 'unchecked'}/>
  <Text>Please accept all terms and conditions</Text>
 
  </View>

 
  <Button style={{marginHorizontal:100 , marginTop:10,backgroundColor:"#DDA0DD"}}
  disabled={check ? false :true}
  >Register</Button>
    </View>
  )
}
const Register=({navigation})=>{
    return(
        <SafeAreaAndView Component={Main} navigation={navigation}/>
    )
}

export default Register;


const styles = StyleSheet.create({
    input:{
        marginHorizontal:65,
        marginVertical:15
    },
    heading:{
        textAlign:"center",
        marginVertical:20,
        color:"rgba(108,21,222,1)",
        fontWeight:"bold"
    }
})