import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './app.styled';
import Home from './pages/Home';
import { AppStore } from './store/store';
import { darkTheme, lightTheme } from './theme';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const App: React.FC = () => {
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyles />
        <Home />
      </Router>
    </ThemeProvider>
  );
};

export default App;
