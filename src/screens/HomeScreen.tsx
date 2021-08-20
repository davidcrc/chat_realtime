import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Container, Center } from 'native-base';
import Login from './Login';
import Chat from './Chat';

const HomeScreen = () => {
  const [userName, setUserName] = useState(null);

  return (
    <Container style={styles.container}>
      {!userName ? <Login setUserName={setUserName} /> : <Chat />}
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
    height: '100%',
    width: '100%',
  },
});
