import { Image, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import Connectioncard from '../../elements/Connectioncard';
import axios from 'axios';
import { addConnection } from "../../utils/connectionSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Base_Url } from '../../utils/constant';
const connection = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);

  const fetchConnection = async () => {
    try {
      const res = await axios.get(Base_Url + "/user/connections", {
        withCredentials: true,
      });

      dispatch(addConnection(res?.data?.data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchConnection();
  }, []);

  if (!connections) return null;

  if (!connections.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No connections available</Text>  
      </View>
    );
  }
  return (
    <ScrollView>
    <View style={styles.container}>

       <Text style={styles.title}>my connections</Text>
      
        {connections.map((data) => (
           <Connectioncard key={data?._id} props={data} />
      ))}
    
      
      
  </View>
  </ScrollView>
  )
}

export default connection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 400,
    margin: 10,
  },
 
});