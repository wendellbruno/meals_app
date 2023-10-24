import { StatusBar } from 'expo-status-bar';
import { useTheme, ThemeProvider } from 'styled-components/native';
import { Home } from './src/pages/Home';

export default function App() {
  const theme = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}
