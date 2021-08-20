import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
interface AppProps {}

const App: React.FunctionComponent<AppProps> = props => {
  return (
    <PaperProvider>
      <HomeScreen />
    </PaperProvider>
  );
};

export default App;
