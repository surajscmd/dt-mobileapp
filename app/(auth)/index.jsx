import { Pressable, Image, StyleSheet } from 'react-native'
import { Text, useThemeColor, View } from '@/components/Themed';
import React from 'react'
import { useNavigation } from 'expo-router';
import Buttoncls from '../../elements/Buttoncls';
const index = () => {
    const navigation = useNavigation();     
     
  return (
    <View style={styles.container}>
       
             <Text style={styles.logo}    lightColor = "#2E5077"  darkColor="#79D7BE" >dev-tinder</Text>
          
            <Image   style={styles.intologo} source={require("../../assets/images/rb.png")}/>
            <Buttoncls  title={"Login"} onPress={()=>navigation.navigate("login")} width={300}/>
               
            <Pressable onPress={()=>navigation.navigate("signin")}>
                <Text  style={styles.signintext}>
                   New? Set Up Account
                </Text>
            </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    intologo:{
        width:400,
        height:300,       
    },

    logo:{
      fontSize: 40,
      fontWeight: 200,
      textAlign: "center",  
    },
    signintext:{
      fontSize: 16,
      fontWeight: 400,
      textAlign: "center",
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:"space-evenly",
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
export default index