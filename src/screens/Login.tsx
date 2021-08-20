import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image } from 'react-native';
import { Input, Button, Text } from 'native-base';
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
    console.log('onSubmit', name);
    setUserName(name)
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Image source={logoApp} resizeMode="contain" style={styles.logo} />
      </View>
      <Input
        variant="underlined"
        placeholder="nombre de usuario"
        style={{ color: '#fff' }}
        placeholderTextColor="grey"
        value={name}
        onChange={e => {
          setName(e.nativeEvent.text);
        }}
      />
      <Button
        style={styles.btnLogin}
        onPress={onSubmit}
        disabled={name == '' || name.length < 3}>
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
