import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

const App = () => (
  <ThemeProvider theme={theme}>
    <div>Olá</div>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
