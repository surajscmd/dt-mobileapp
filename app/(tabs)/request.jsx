import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import Requestcard from '../../elements/Requestcard';
import axios from 'axios';
import { Base_Url } from '@/utils/constant';
import { addrequest } from '../../utils/requestSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function TabTwoScreen() {
  const dispatch = useDispatch();
  const request = useSelector((store) => store.request);
  
  const fetchrequest = async () => {
    try {
      const res = await axios.get(Base_Url + "/user/requests/received", {
        withCredentials: true,
      });
      console.log("res", res);
        dispatch(addrequest(res?.data?.data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchrequest();
    console.log("request", request);
  }, []);


  if (!request) return null;

  if (!request.length) {
    return (
        <View style={styles.container}>
           <Text style={styles.title}>No request available</Text>
        </View>
    );
  }
  return (
    <ScrollView>
         <View style={styles.container}>
           <Text style={styles.title}></Text>

              {request?.map((data) => {
                  const user = data?.fromUserId;
              return (
                <Requestcard key={user._id} props={user}  connId={data} />
              );
              })
              }
           </View>
    </ScrollView> 
  );
}
//<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
