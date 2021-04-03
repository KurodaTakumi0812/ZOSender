import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function PushAnnouncementScreen() {
  return (
    <View style={styles.container}>
      <Text>お知らせを更新</Text>
      <TextInput style={styles.titleInput} placeholder="タイトル" />
      <TextInput style={styles.bodyInput} placeholder="本文"/>
      <View>
        <Button
          title="更新"
          onPress={()=>{ }}
        />
      <StatusBar style="auto" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleInput: {
      width: '90%',
      height:38,
      borderWidth:1,
  },
  bodyInput: {
      width: '90%',
      height: 300,
      textAlignVertical: 'top',
      borderWidth: 1,
  }
});