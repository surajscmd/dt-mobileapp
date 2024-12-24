import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          backgroundColor:Colors[colorScheme ?? 'light'].backgroundColor, // Tab bar background color
          borderTopWidth: 0, // Optional: Remove border on top of tab bar
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon : ({ color }) =><MaterialCommunityIcons name="file-find-outline" size={25}   color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Fontisto name="player-settings"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
   
       <Tabs.Screen
        name="request"
        options={{
          title: 'Request',
          tabBarIcon: ({ color }) => <AntDesign name="downcircleo" size={25} color={color}  /> ,
        }}
      />
       <Tabs.Screen
        name="connection"
        options={{
          title: 'connection',
          tabBarIcon: ({ color }) => <FontAwesome6 name="connectdevelop" size={25} color={color} />,
        }}
      />
         <Tabs.Screen
        name="myprofile"
        options={{
          title: 'myprofile',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-convert" size={25} color={color} />,
        }}
      />
    </Tabs>
  );
}
