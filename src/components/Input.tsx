import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Input as InputNB, Icon } from 'native-base';

interface InputProps {}

const Input: React.FunctionComponent<InputProps> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.itemInput}>
        <InputNB
          variant="unstyled"
          placeholder="Mensaje"
          style={styles.input}
          placeholderTextColor="grey"
        />
        <TouchableOpacity>
          <Icon name="send" style={styles.iconSend} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
    paddingBottom: Platform.OS === "ios"? 20 : 0,
    paddingHorizontal: 20,
  },
  itemInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#16202b',
  },
  input: {
    color: '#fff',
  },
  iconSend: {
    color: "#fff",
  },
});
