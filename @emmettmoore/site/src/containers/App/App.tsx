/* eslint-disable filenames/match-exported */
import type { AppProps } from 'next/app';
import { muiTheme } from '@site/theme';
import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
