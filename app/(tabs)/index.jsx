import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Swipecard from '../../elements/Swipecard';
import { Text, View } from '@/components/Themed';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { Base_Url } from '@/utils/constant';
import { addfeed } from '@/utils/feedSlice';


export default function TabOneScreen() { 
  const dispatch = useDispatch();
  const feed = useSelector((store)=> store.feed);

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(Base_Url + "/feed",{withCredentials: true});
      dispatch(addfeed(res?.data?.data));
    } catch (error) {
      console.error("Error fetching feed:", error);
      // Optionally, you can dispatch an error action or show an error message to the user
    }
  };
  useEffect(()=>{
    getFeed()
  },[]);
  
  if (!feed) return null;

  if (!feed.length) {
    return (  
      <View style={styles.container}>
        <Text style={styles.title}>No feed avilable</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Swipecard props={feed[0]}/>
    </View>
  );
}
//lightColor="black" darkColor="rgba(255,255,255,0.1)"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"flex-start",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
