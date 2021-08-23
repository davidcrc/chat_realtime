import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Input from '../components/Input';
import firebase from '../utils/constants';

interface ChatProps {}

const Chat: React.FunctionComponent<ChatProps> = props => {
  const sendMessage = async (message: string) => {
    console.log('send Message::', message);
    firebase
      .database()
      .ref('general')
      .push({ userName: 'NULL', text: message, time: 'NULL' });
  };

  return (
    <>
      <View style={styles.content}>
        <Text>CHAT</Text>
        <Input sendMessage={sendMessage} />
      </View>
    </>
  );
};

export default Chat;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
