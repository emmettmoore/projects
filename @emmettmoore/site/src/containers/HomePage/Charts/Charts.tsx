import { Box } from '@mui/material';

import { Interests, HomeState, HomeCity, RemoteWork } from './lifeCharts';

import styles from './Charts.module.scss';

const Charts = (): JSX.Element => {
  return (
    <Box className={styles.charts} sx={{ display: `block`, width: `100%` }}>
      <HomeState />
      <HomeCity />
      <Interests />
      <RemoteWork />
    </Box>
  );
};

export default Charts;
