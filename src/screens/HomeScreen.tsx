import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Login from './Login';
import Chat from './Chat';

const HomeScreen = () => {
  const [userName, setUserName] = useState(null);

  return (
    <View style={styles.container}>
      {!userName ? <Login setUserName={setUserName} /> : <Chat />}
    </View>
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
