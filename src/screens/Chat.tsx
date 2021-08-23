import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import Input from '../components/Input';
import firebase from '../utils/constants';
import lodash, { map } from 'lodash';
import Message from '../components/Message';
import { MessageApi } from '../api/api';

interface ChatProps {
  userName: string;
}

const Chat: React.FunctionComponent<ChatProps> = props => {
  const { userName } = props;
  const [messages, setMessages] = useState<Array<MessageApi>>([]);
  const [sound, setSound] = useState<Boolean>(false);
  const chatScrollRef = useRef();

  useEffect(() => {
    const chat = firebase.database().ref('general');
    chat.on('value', snapshot => {
      // console.log(snapshot.val());
      setMessages(snapshot.val());
    });
    setSound(true);
    // console.log("AHORA SUENA")
  }, []);

  useEffect(() => {
    // REVIEW: esto puede mejorar
    chatScrollRef.current.scrollTo({ y: 10000000 });
  }, [messages]);

  const sendMessage = async (message: string) => {
    console.log('send Message::', message);
    const date = new Date();
    let sms: MessageApi;
    sms = {
      userName: userName,
      text: message,
      time: date.getTime(),
    };
    firebase.database().ref('general').push(sms);
  };

  return (
    <SafeAreaView style={styles.content}>
      <ScrollView style={styles.chatView} ref={chatScrollRef}>
        {map(messages, (message, index) => (
          <Message key={index} message={message} name={userName} />
        ))}
      </ScrollView>
      <Input sendMessage={sendMessage} />
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  chatView: {
    backgroundColor: '#1b2734',
  },
});
