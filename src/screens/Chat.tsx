import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Input from '../components/Input';

interface ChatProps {}

const Chat: React.FunctionComponent<ChatProps> = props => {
  return (
    <>
      <View style={styles.content}>
        <Text>CHAT</Text>
        <Input />
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
