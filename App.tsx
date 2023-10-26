import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { Home } from './src/pages/Home';

export default function App() {
  return (
     <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
     </>
  );
}
