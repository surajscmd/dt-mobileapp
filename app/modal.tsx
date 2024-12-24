import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useNavigation } from 'expo-router';
import Buttoncls from '../elements/Buttoncls';
import axios from 'axios';
import { Base_Url } from '@/utils/constant';
import { removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ModalScreen() {
  const navigation = useNavigation();
  const user = useSelector((store)=>store.user)
  const dispatch = useDispatch();

  const handlelogout = async () =>{
    try {
      const res = await axios.post(Base_Url + "/Logout", {} ,{withCredentials: true})
      dispatch(removeUser());
      return navigation.navigate('(auth)');
    } catch (error) {
      console.error(error)
      // redirect to error page
    }
  }
  return (
    <View style={styles.container}>
      <Buttoncls  title={"Logout"} onPress={handlelogout} width={200}/>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
