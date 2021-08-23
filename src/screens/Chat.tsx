import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Input from '../components/Input';
import firebase from '../utils/constants';
import lodash, { map } from 'lodash';
import Message from '../components/Message';

interface ChatProps {
  userName: string;
}

const Chat: React.FunctionComponent<ChatProps> = props => {
  const { userName } = props
  const [messages, setMessages] = useState([]);
  const chatScrollRef = useRef()

  useEffect(() => {
    const chat = firebase.database().ref('general');
    chat.on('value', snapshot => {
      console.log(snapshot.val());
      setMessages(snapshot.val());
    });
  }, []);

  useEffect(() => {
    // REVIEW: esto puede mejorar
    chatScrollRef.current.scrollTo({ y: 10000000 })
  }, [messages])

  const sendMessage = async (message: string) => {
    console.log('send Message::', message);
    firebase
      .database()
      .ref('general')
      .push({ userName , text: message, time: 'NULL' });
  };

  return (
    <>
      {/* TODO: cabecera */}
      <View style={styles.content}>
        <ScrollView style={styles.chatView} ref={chatScrollRef} >
          {map(messages, (message, index)=> (
            <Message key={index} message={message} name={userName} />
          ))}
        </ScrollView>
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
  chatView: {
    backgroundColor: '#1b2734'
  },
});
