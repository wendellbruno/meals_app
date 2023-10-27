import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { Home } from './src/pages/Home';
import {AppRoutes} from './src/routes'

export default function App() {
  return (
     <>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
     </>
  );
}
