import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import PushAnnouncementScreen from './src/screens/PushAnnouncementScreen';
import PushNotificationScreen from './src/screens/PushNotificationScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
  	      screenOptions={({ route }) => ({
  		      tabBarIcon: ({ focused, color, size }) => {
  			      let iconName;
  			      if (route.name === 'Tab1') {
  				      iconName = focused
                 ? 'ios-cube'
                 : 'ios-cube';
                return <MaterialIcons name="announcement" size={size} color={color} />
  		  	    } else if (route.name === 'Tab2') {
  				      iconName = focused
                 ? 'ios-globe'
                 : 'ios-globe';
                 return <Ionicons name="notifications" size={size} color={color} />;
  			      }
            },
          }
         )}
         tabBarOptions={{
           activeTintColor: 'white',
             inactiveTintColor: '#333399',
             activeBackgroundColor:'#333399',
             inactiveBackgroundColor:'#9999dd',
         }}
       >
        <Tab.Screen name="Tab1" component={PushAnnouncementScreen} options={{tabBarLabel:'お知らせの追加'}} />
        <Tab.Screen name="Tab2" component={PushNotificationScreen} options={{tabBarLabel:'Push通知の送信'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
