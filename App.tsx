import React from 'react';
import { NativeBaseProvider } from 'native-base';
import HomeScreen from './src/screens/HomeScreen';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = props => {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
};

export default App;
