import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text, View } from '@/components/Themed';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { removeUserfeed } from '@/utils/feedSlice';
import { Base_Url } from '@/utils/constant';

const Swipecard = ({props}) => {
    const dispatch = useDispatch();
    const handleSendRequest = async (status , userId) =>{
      try {
        const res = await axios.post(Base_Url + "/request/send/" + status + "/" + userId ,{}, { withCredentials:true} )
        dispatch(removeUserfeed(userId))
        // console.log(res)
      } catch (error) {
        console.error(error)
      }
    }
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{props.firstName + " " + props.lastName}</Text>
    <Image
       style={styles.imageprofile}
        source={{ uri: props.photoUrl }}
     />
  
   <View style={styles.containerdescription}>
         <View  style={styles.agegendercontiner}  >
            <Text style={styles.gender}> {props.gender}</Text>  
            <Text  style={styles.age}> {props.age}</Text>  
          </View>
    <Text style={styles.skills} >{props.skills}</Text>
    <ScrollView>
         <Text style={styles.about}>{props.about} </Text>
    </ScrollView>
    </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.rejectButton} onPress={()=>handleSendRequest("ignored", props?._id)} >
        <MaterialCommunityIcons name="close-circle-multiple-outline" size={34} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.acceptButton}  onPress={()=>handleSendRequest("interested", props?._id)}>
          <AntDesign name="checkcircleo" size={34} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:"center",
      },
      title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 300,
        padding: 10,
      },
      imageprofile:{
        width: 220,
        height: 300,
        cover: 'contain',
        borderWidth: 1,
        borderColor: '#000'
      },
      containerdescription:{
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        margin: 10,
        textAlign: 'center',
      }, 
      agegendercontiner:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: 300,
        paddingHorizontal: 30,
        paddingVertical:10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
      },
      age:{
        fontSize: 20,
        fontWeight: 400,
      },
      skills:{
        fontSize: 20,
        fontWeight: 400,
        margin: 10,
      },
      gender:{
        fontSize: 20,
        fontWeight: 400
      },
      about:{
        fontSize: 13,
        fontWeight: 400,
        margin: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 15,
      },
      rejectButton: {
        backgroundColor: '#ff4d4d',
        padding: 18,
        borderRadius: 50,
        marginHorizontal: 8,
        // width: 120,
        alignItems: 'center',
      },
      acceptButton: {
        backgroundColor: '#4caf50',
        padding: 18,
        borderRadius: 50,
        marginHorizontal: 8,
        // width: 120,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
})
export default Swipecard