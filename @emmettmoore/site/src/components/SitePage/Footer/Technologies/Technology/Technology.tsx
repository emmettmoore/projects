import { ReactNode } from 'react';

import { Typography } from '@mui/material';

interface Props {
  children: ReactNode;
}

const Technology = ({ children }: Props): JSX.Element => {
  return (
    <Typography component="div" sx={{ color: 'white' }} variant="body1">
      {children}
    </Typography>
  );
};

export default Technology;
