import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';
import Input from '../components/Input';
import firebase from '../utils/constants';
import lodash, { map } from 'lodash';
import Message from '../components/Message';
import { MessageApi } from '../api/api';
import { ActivityIndicator } from 'react-native-paper';
interface ChatProps {
  userName: string;
}

const Chat: React.FunctionComponent<ChatProps> = props => {
  const { userName } = props;
  const [messages, setMessages] = useState<Array<MessageApi>>([]);
  const [sound, setSound] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatScrollRef = useRef();

  useEffect(() => {
    setIsLoading(true);
    const chat = firebase.database().ref('general');
    chat.on('value', snapshot => {
      // console.log(snapshot.val());
      setMessages(snapshot.val());
      setIsLoading(false);
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
      <View style={styles.isLoading}>
        <ActivityIndicator size={30} animating={isLoading} color={'#4b66f0'} />
      </View>
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
  isLoading: {
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    position: 'absolute',
    zIndex: 1,
  },
  chatView: {
    backgroundColor: '#1b2734',
  },
});
