import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image, TextInput } from 'react-native';
import {  Button } from 'react-native-paper';
const logoApp = require('../assets/chatLogo.png');
// import logoApp from '../assets/chatLogo.png';

interface Props {
  setUserName: any;
}

const Login = (props: Props) => {
  // console.log("props login", props);
  const { setUserName } = props;
  const [name, setName] = useState('');

  const onSubmit = () => {
    // console.log('onSubmit', name);
    setUserName(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Image source={logoApp} resizeMode="contain" style={styles.logo} />
      </View>
      <TextInput
        placeholder="Nombre de usuario"
        style={{ color: '#000', backgroundColor: '#fff', padding: 20}}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button
        mode="contained"
        disabled={name == '' || name.length < 3}
        style={styles.btnLogin}
        labelStyle={{ color: '#fff' }}
        onPress={onSubmit}>
        Entrar
      </Button>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 100,
  },
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  btnLogin: {
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: '#0098D3',
  },
});
