import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import {  IconButton } from 'react-native-paper';

interface InputProps {}

const Input: React.FunctionComponent<InputProps> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.itemInput}>
        <TextInput
          placeholder="Mensaje"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={text => console.log('damm', text)}
        />
        <IconButton
          icon="send"
          color="#fff"
          size={20}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 20,
    width: '95%',
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
    width: '100%',
  },
});
