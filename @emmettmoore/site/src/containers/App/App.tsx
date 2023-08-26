/* eslint-disable filenames/match-exported */
import type { AppProps } from 'next/app';
import { muiTheme } from '@site/theme';
import { ThemeProvider } from '@mui/material';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
