import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import React from 'react'
import { removerequest } from '../utils/requestSlice';
import axios from 'axios';
import { Base_Url } from '@/utils/constant';
import { useDispatch } from 'react-redux';

const Requestcard = ({props, connId}) => {
    const dispatch = useDispatch();
    const reviewRequest = async (status , _id) =>{
        try {
          const response = await axios.post(Base_Url + "/request/review/"  + status + "/" +  _id,{},{
            withCredentials: true,
          });
          dispatch(removerequest(_id))
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
  return (
      <View style={styles.container}>
       <View style={styles.containerdescription}>
        <View style={styles.imagenamecontainer}  > 
              <Image
                style={styles.imagerequest}
                source={{ uri: props.photoUrl }}
              />   
              <View style={styles.nameanddetailscon}  >
              <Text style={styles.namelas} >{props.firstName + " " + props.lastName}</Text>
              <Text style={styles.agelre}>{props.age}</Text>
              <Text style={styles.genderlres}> {props.gender}</Text>
              </View>
             
        </View>
          
        <Text style={styles.skills} >{props.skills}</Text>
        <ScrollView>
                 <Text style={styles.about}>{props.about}</Text>
         </ScrollView>
         <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.rejectButton} onPress={()=>reviewRequest("rejected", connId._id)} >
        <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.acceptButton} onPress={()=>reviewRequest("accepted", connId._id)} >
          <Text style={styles.buttonText}>Accept</Text>
      
        </TouchableOpacity>
      </View>
      </View>
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    buttonContainer: {
      flexDirection: 'row',
      alignItems:"center",
      justifyContent:"center",
      marginTop: 16,
    },
    buttonText:{
     fontSize:16,
     fontWeight:500,
     color:"#fff"
  
    },
    rejectButton: {
      backgroundColor: '#ff4d4d',
      padding: 10,
      borderRadius: 2,
       margin: 8,
      width: 120,
      alignItems: 'center',
    },
    acceptButton: {
      backgroundColor: '#4caf50',
      padding: 10,
      borderRadius: 2,
      margin: 8,
      width: 120,
      alignItems: 'center',
    },
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
      fontSize: 20,
      fontWeight: 600,
    },
    
    agelre:{
      fontSize: 19,
      fontWeight: 400,
    },
    genderlres:{
      fontSize: 19,
      fontWeight: 400,
    },
    containerdescription:{
      width: 370,
      height: 360,
      textAlign: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 10,
      margin: 10,
      
    },
    skills:{
      fontSize: 15,
      fontWeight: 600,
      margin: 10,
    },
    about:{
      fontSize: 14,
      fontWeight: 400,
      margin: 10,
    },
  });
export default Requestcard