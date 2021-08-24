import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './Login';
import Chat from './Chat';

const HomeScreen = () => {
  const [userName, setUserName] = useState('');

  return (
    <View style={styles.container}>
      {!userName ? (
        <Login setUserName={setUserName} />
      ) : (
        <Chat userName={userName} />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
