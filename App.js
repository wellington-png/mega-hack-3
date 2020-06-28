import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

import logoImg from "./assets/logo.png";
import img from "./assets/img.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logoImg} />
      </View>

      <View style={styles.contentForm}>
      <TextInput
        style={styles.login}
        placeholder="Email"
      />
      <TextInput
        style={styles.login}
        placeholder="Senha"

      />
      <Button
        style={styles.buttonLogin}
        title={'Logar'}
      />
      </View>
      <View>
      <Image source={img} />
      </View>
     
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  },
  contentForm:{
    flexGrow: 1,
    width: '100%',
  },
  
  login: {
    height: 40,
    borderColor: '#100a61',
    width: '100%',
    paddingLeft: 4,
    flexWrap: 'wrap',
    borderRadius: 7,
    marginBottom: 8,
    borderWidth: 1,
    

  },
  buttonLogin: {
    backgroundColor: '#555'
  }
 
});
