import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase';

export default function PushAnnouncementScreen() {
  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');

  function handlePress(){
    if (title === ''){
      Alert.alert('タイトルを入力してください。')
    }else if (body === ''){
      Alert.alert('本文を入力してください')
    }else{
      const db = firebase.firestore();
      const ref = db.collection('announcements')
      ref.get().then((doc)=>{
        const announcementsList=[];
        doc.forEach((doc)=>{
          const data = doc.data();
          announcementsList.push({
            id: doc.id,
          });
        });
        console.log(announcementsList.length+1);
        const idNumber=announcementsList.length + 1;
        let pushId
        if (idNumber<10){
          pushId=`No.0000${idNumber}`
        }else if (idNumber<100){
          pushId=`No.000${idNumber}`
        }else if (idNumber<1000){
          pushId=`No.00${idNumber}`
        }else if (idNumber<10000){
          pushId=`No.0${idNumber}`
        }
        pushFirebase(pushId);
      },(error) => {
        Alert.alert('データの読み込みに失敗しました。', error);
      });
    }
  };

  function pushFirebase(id){
    Alert.alert(
      '確認',
      'お知らせに追加してもよろしいですか？',
      [
        {
          text: 'cancel',
          onPress: () => { },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            const db = firebase.firestore();
            const ref = db.collection('announcements')
            ref.doc(id).set({
              body: `${body}`,
              title: `${title}`,
              date: new Date(),
            },{ merge:true})
            .then(()=>{
              Alert.alert('お知らせを追加しました')
              setTitle('');
              setBody('');
            })
            .catch(()=>{
              Alert.alert('サーバー書き込みエラー');
            });
          }
        },
      ],
    );
  }

  return (
    <View style={styles.container}>
      <Text>お知らせを追加</Text>
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