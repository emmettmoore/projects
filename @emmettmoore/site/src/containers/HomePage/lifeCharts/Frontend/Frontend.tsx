import { useTheme } from '@mui/material';
import { BaseChart } from '../../components';
import getFrontendData from './getFrontendData';
import {
  MEH,
  NEAT,
  LOVE,
  NONE,
  INTRODUCED,
  ADOPTED,
  getLeftYAxis,
  getRightYAxis,
} from './utils';
import { colors } from '@site/theme';

import { get18AdjustedAgeFormatter } from '../utils';

const Frontend = (): JSX.Element => {
  const theme = useTheme();
  const frontendData = getFrontendData();

  return (
    <BaseChart
      data={frontendData}
      lines={[
        {
          dataKey: `cssModules`,
          label: `CSS Modules`,
          color: colors.charts.green,
        },
        {
          dataKey: `enjoyment`,
          label: `Enjoyment`,
          color: colors.charts.purple,
        },
        {
          dataKey: `react`,
          label: `React`,
          color: theme.palette.secondary.main,
        },
        {
          dataKey: `typescript`,
          label: `Typescript`,
          color: theme.palette.primary.main,
        },
      ]}
      title="Modern Stacks x Enjoyment of Frontend Work"
      xAxis={{
        dataKey: `age`,
        ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        tickFormatter: get18AdjustedAgeFormatter(),
      }}
      yAxis={{
        ticks: getRightYAxis(),
        tickFormatter: (val: number): string => {
          if (val === NONE) {
            return `None`;
          }
          if (val === INTRODUCED) {
            return `Trying out`;
          }
          if (val === ADOPTED) {
            return `Adopted`;
          }
          return ``;
        },
      }}
      yAxisRight={{
        ticks: getLeftYAxis(),
        tickFormatter: (val: number): string => {
          if (val === MEH) {
            return `Meh`;
          }
          if (val === NEAT) {
            return `It's Neat`;
          }
          if (val === LOVE) {
            return `❤️`;
          }
          return ``;
        },
      }}
    />
  );
};

export default Frontend;
