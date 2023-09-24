import { Box } from '@mui/material';

import InterestsChart from './Chart';

const Charts = (): JSX.Element => {
  return (
    <Box sx={{ display: `block`, minWidth: `100%` }}>
      <InterestsChart />
    </Box>
  );
};

export default Charts;
