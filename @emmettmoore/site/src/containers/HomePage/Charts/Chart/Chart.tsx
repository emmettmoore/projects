/* eslint-disable react/no-array-index-key */
import styles from './Chart.module.scss';
import { Typography, useTheme } from '@mui/material';

import getData from './getData';

import {
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

import CustomLegend from './Legend';

const Chart = (): JSX.Element => {
  const theme = useTheme();
  const data = getData();
  return (
    <>
      <Typography align="center" variant="h5">
        My Interests
      </Typography>
      <ResponsiveContainer
        className={styles.responsiveContainer}
        height={250}
        width="80%">
        <LineChart data={data} margin={{ right: 25, top: 10 }}>
          <Line
            dataKey="music"
            dot={false}
            name="Music"
            stroke={theme.palette.primary.main}
            type="monotone"
          />
          <Line
            dataKey="climbing"
            dot={false}
            name="Climbing"
            stroke={theme.palette.secondary.main}
            type="monotone"
          />
          <YAxis
            tick={{
              fill: theme.palette.primary.main,
              fontFamily: theme.typography.body1.fontFamily,
              fontSize: theme.typography.body1.fontSize,
            }}
            tickCount={4}
            tickFormatter={(val: number): string => {
              if (val === 0) {
                return `Dormant`;
              }
              if (val === 33) {
                return `Interested`;
              }
              if (val === 66) {
                return `Dedicated`;
              }
              if (val === 100) {
                return `Too Much`;
              }
              return ``;
            }}
            ticks={[0, 33, 66, 100]}
            type="number"
            width={100}
          />
          <XAxis
            dataKey="age"
            interval="preserveStartEnd"
            label="Age"
            tick={{
              fill: theme.palette.primary.main,
              fontFamily: theme.typography.body1.fontFamily,
              fontSize: theme.typography.body1.fontSize,
            }}
            ticks={[0, 6, 12, 18, 24, 30]}
            type="number"
          />

          <Legend content={CustomLegend} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
