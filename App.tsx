import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { Home } from './src/pages/Home';
import {AppRoutes} from './src/routes'
import {ConcertOne_400Regular, useFonts} from '@expo-google-fonts/concert-one'
export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    ConcertOne_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
     <>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
     </>
  );
}
