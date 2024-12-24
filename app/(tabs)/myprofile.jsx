import { Image, ScrollView, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { Text, View } from '@/components/Themed';
export default class myprofile extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View  style={styles.imagenamecontainer} >
        <Image
          style={styles.imageprofile}
          source={require('../../assets/images/images.jpg')}
      />   
        <View style={styles.nameanddetailscon}  >
                 <View style={styles.flexrow}>
                   <Text style={styles.dics} >FirstName : </Text>
                    <Text style={styles.namelas} >Firstast</Text>
                 </View>
                 <View style={styles.flexrow}>
                   <Text style={styles.dics} >LastName : </Text>
                    <Text style={styles.namelas} >FirstLast</Text>
                 </View>
                 <View style={styles.flexdis}>
                   <Text style={styles.dics} >age : </Text>
                   <Text style={styles.agelre}>25</Text>
                 </View>
                 
                 <View style={styles.flexdis}>
                   <Text style={styles.dics} >Gender : </Text>
                   <Text style={styles.genderlres}> Male</Text>
                 </View>        
         </View>    
      </View>
             <View style={styles.abtdis}>
                 <View style={styles.flexdis}>
                   <Text style={styles.dics} >Skills : </Text>
                   <Text style={styles.skills} >Java, python, expo</Text>
                 </View>    
              
                
      
           <ScrollView>
                 <View style={styles.flexrow}>
                   <Text style={styles.dics} >About : </Text>
                   <Text style={styles.about}>"Vladimir Vladimirovich Putin is a Russian politician and former intelligence officer who has served as President of Russia since 2012, having previously served from 2000 to 2008. </Text>
                 </View>   
           </ScrollView>
           </View>  
      </View>

    )
  }
}

const styles = StyleSheet.create({
  flexdis:{
     flexDirection:"row",
     alignItems:"center"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  abtdis:{
    width:400,
    flexDirection:"column",
    alignItems:"center",
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    paddingVertical:20,
    paddingHorizontal: 15,
  },
  skills:{
    fontSize: 16,
    fontWeight: 400,
    margin: 10,
  },
  about:{
    fontSize: 14,
    fontWeight: 400,
    margin: 10,
  },
  flexrow:{
   alignItems:"center",
   paddingVertical:12,
  },
  dics:{
    fontSize:18,
    fontWeight:700,
  },
  imagenamecontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  imageprofile:{
    width: 200,
    height: 280,
    borderWidth: 1,
    borderColor: '#000'
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
    fontWeight: 400,
  },
  
  agelre:{
    fontSize: 16,
    fontWeight: 400,
  },
  genderlres:{
    fontSize: 15,
    fontWeight: 400,
  },
})