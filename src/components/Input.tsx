import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
  Dimensions,
} from 'react-native';
import { IconButton } from 'react-native-paper';

const {width} = Dimensions.get('window')
interface InputProps {
  sendMessage: any;
}

const Input: React.FunctionComponent<InputProps> = props => {
  const { sendMessage } = props;
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    // console.log('sms', message);
    if(message.length > 0) {
      sendMessage(message)
      setMessage('')
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemInput}>
        <TextInput
          placeholder="Mensaje"
          placeholderTextColor="grey"
          style={styles.input}
          value={message}
          onChangeText={text => setMessage(text) }
          numberOfLines={1}
        />
        <TouchableOpacity style={{ }}  onPress={() => onSubmit()}>
          <IconButton icon="send" color="#fff" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 10,
    // width: width,
  },
  itemInput: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#16202b',
  },
  input: {
    color: '#fff',
    backgroundColor: '#16202b',
    maxWidth: "90%"
  },
});
