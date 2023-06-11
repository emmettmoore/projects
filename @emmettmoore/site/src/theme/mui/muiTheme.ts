import breakpoints from './breakpoints';
import typography from './typography';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    keys: [`xs`, `sm`, `md`, `lg`, `xl`],
    values: breakpoints,
  },
  typography,
});

export default responsiveFontSizes(theme);
