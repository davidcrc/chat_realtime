import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MessageProps {
  name: string;
  message: any;
}

const Message: React.FunctionComponent<MessageProps> = props => {
  const { message, name } = props;
  const { userName, text, title, time } = message;
  const thisIsMe = name === userName;

  const conditionalStyle = {
    container: {
      justifyContent: thisIsMe ? 'flex-end' : 'flex-start',
    },
    viewMessage: {
      backgroundColor: thisIsMe ? '#f0f0f1' : '#4b86f0',
    },
    message: {
      color: thisIsMe ? '#000' : '#fff',
      textAlign: thisIsMe ? 'right' : 'left',
    },
  };

  return (
    <View style={[styles.container, conditionalStyle.container]}>
      <View style={[styles.vieMessage, conditionalStyle.viewMessage ]} >
        <Text style={[styles.message, conditionalStyle.message ]} >Mensaje {text}</Text>
        <Text style={[styles.time, thisIsMe ? styles.timeLeft : styles.timeRight]} > {time}</Text>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  vieMessage: {
    borderRadius: 10,
    minHeight: 35,
    minWidth: "40%",
    maxWidth: "80%",
  },
  message: {
    padding: 5,
    paddingHorizontal: 8,
    paddingBottom: 25,
  },
  time: {
    fontSize: 10,
    position: 'absolute',
    bottom: 5,
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end'
  },
  timeRight: {
    right: 8,
    color: 'white'
  },
  timeLeft: {
    left: 8,
    color: 'grey'
  },
});
