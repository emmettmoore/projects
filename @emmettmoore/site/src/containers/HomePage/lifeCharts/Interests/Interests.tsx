import { useTheme } from '@mui/material';
import { BaseChart } from '../../components';
import getInterestsData from './getInterestsData';
import { colors } from '@site/theme';

import { getYAxisTicks } from './utils';
import { get30YearAdjustedAgeFormatter } from '../utils';

const Interests = (): JSX.Element => {
  const theme = useTheme();
  const interestsData = getInterestsData();
  return (
    <BaseChart
      data={interestsData}
      lines={[
        {
          dataKey: `music`,
          label: `Music`,
          color: theme.palette.primary.main,
        },
        {
          dataKey: `climbing`,
          label: `Climbing`,
          color: theme.palette.secondary.main,
        },
        {
          dataKey: `poker`,
          label: `Poker`,
          color: colors.charts.green,
        },
        {
          dataKey: `running`,
          label: `Running`,
          color: colors.charts.purple,
        },
      ]}
      title="Commitment to My Hobbies"
      xAxis={{
        dataKey: `age`,
        label: `Age`,
        ticks: [0, 6, 12, 18, 24, 30],
        tickFormatter: get30YearAdjustedAgeFormatter(),
      }}
      yAxis={{
        ticks: getYAxisTicks(),
        tickFormatter: (val: number): string => {
          if (val === 0) {
            return `Dormant`;
          }
          if (val === 33) {
            return `A little`;
          }
          if (val === 66) {
            return `Very`;
          }
          if (val === 100) {
            return `Fully`;
          }
          return ``;
        },
      }}
    />
  );
};

export default Interests;
