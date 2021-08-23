import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import letterColors from '../utils/letterColors';

interface MessageProps {
  name: string;
  message: any;
}

const Message: React.FunctionComponent<MessageProps> = props => {
  const { message, name } = props;
  const { userName, text, title, time } = message;
  const [bgColorLetter, setBgColorLetter] = useState<Array<number>>()

  const thisIsMe = name === userName;

  useEffect(() => {
    const char = userName.trim()[0].toUpperCase();
    const indexLetter = char.charCodeAt() - 65;
    console.log(indexLetter)
    setBgColorLetter(letterColors[indexLetter])
  }, [])

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

  const bcolorUser = {
    backgroundColor: `rgb(${bgColorLetter})`
  }

  return (
    <View style={[styles.container, conditionalStyle.container]}>
      {!thisIsMe && (
        <View style={[styles.letterView, bcolorUser  ]}>
          <Text style={styles.letter}>{userName.substr(0, 1)}</Text>
        </View>
      )}
      <View style={[styles.vieMessage, conditionalStyle.viewMessage]}>
        <Text style={[styles.message, conditionalStyle.message]}>
          Mensaje {text}
        </Text>
        <Text
          style={[styles.time, thisIsMe ? styles.timeLeft : styles.timeRight]}>
          {' '}
          {time}
        </Text>
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
  letterView: {
    height: 35,
    width: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: 'red',
  },
  letter: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
  },
  vieMessage: {
    borderRadius: 10,
    minHeight: 35,
    minWidth: '40%',
    maxWidth: '80%',
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
    justifyContent: 'flex-end',
  },
  timeRight: {
    right: 8,
    color: 'white',
  },
  timeLeft: {
    left: 8,
    color: 'grey',
  },
});
