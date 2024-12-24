import React from 'react'
import { Image, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
const Connectioncard = ({props}) => {
  return (
  
       
    <View style={styles.containerdescription}>
      <View style={styles.imagenamecontainer}  > 
          <Image
              style={styles.imagerequest}
              source={{ uri: props.photoUrl }}
           />   
            <View style={styles.nameanddetailscon}  >
            <Text style={styles.namelas} >{props.firstName + " " + props.lastName}</Text>
            <Text style={styles.agelre}>{props.age}</Text>
            <Text style={styles.genderlres}>{props.gender}</Text>
            </View>
      </View>
      <Text style={styles.skills} >{props.skills}</Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
     separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    imagerequest:{
      width: 100,
      height: 100,
      borderRadius: 100,
      margin: 10,
    },
    imagenamecontainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 10,
    },
    nameanddetailscon:{
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 10,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 20,
      padding: 20,
    },
    namelas:{
      fontSize: 17,
      fontWeight: 500,
    },
    
    agelre:{
      fontSize: 16,
      fontWeight: 400,
    },
    genderlres:{
      fontSize: 15,
      fontWeight: 400,
    },
    containerdescription:{
      width: 370,
      height: "auto",
      textAlign: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 10,    
      margin: 10,
    },
    skills:{
      fontSize: 17,
      fontWeight: 400,
      textAlign: 'center',
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 20,
      paddingVertical: 10,
    },
  });

export default Connectioncard