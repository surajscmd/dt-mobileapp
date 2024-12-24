import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {

  return (
    
      <Stack>
       
        <Stack.Screen name="index" options={{ headerShown: false}}  />
        <Stack.Screen name="login" options={{ headerShown: true ,  title: "Login"}} />
        <Stack.Screen name="signin" options={{ headerShown: true ,   title: "Register"}} />
      </Stack>

  );
}
