import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function PushNotificationScreen() {
  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');

  function handlePress(){

  };

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/notifications
// async function sendPushNotification(expoPushToken) {
//   const message = {
//     to: expoPushToken,
//     sound: 'default',
//     title: 'Original Title',
//     body: 'And here is the body!',
//     data: { someData: 'goes here' },
//   };

//   await fetch('https://exp.host/--/api/v2/push/send', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Accept-encoding': 'gzip, deflate',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(message),
//   });
// }


  return (
    <View style={styles.container}>
    <Text>Push通知の送信</Text>
    <TextInput 
      style={styles.titleInput} 
      placeholder="タイトル" 
      value={title}
      onChangeText={text=>setTitle(text)}
    />
    <TextInput 
      style={styles.bodyInput} 
      placeholder="本文" 
      multiline
      value={body}
      onChangeText={text=>setBody(text)}
    />
    <View style={styles.buttonContainer}>
      <Button
        title="追加"
        onPress={handlePress}
      />
    <StatusBar style="auto" />
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleInput: {
    width: '90%',
    height: 38,
    borderWidth: 1,
    backgroundColor:"white",
    paddingHorizontal:4,
  },
  bodyInput: {
    marginTop:8,
    width: '90%',
    height: '60%',
    textAlignVertical: 'top',
    borderWidth: 1,
    backgroundColor: "white",
    paddingHorizontal:4,
    paddingVertical:4,
  },
  buttonContainer:{
    backgroundColor: "red",
    width: "80%",
    marginTop: 16,
  },
});