import { useTheme } from '@mui/material';
import { BaseChart } from '../../components';
import getRemoteWorkData from './getRemoteWorkData';
import { colors } from '@site/theme';
import { HOME, OFFICE, LOW, HIGH } from './utils';

import { get18AdjustedAgeFormatter } from '../utils';

const RemoteWork = (): JSX.Element => {
  const theme = useTheme();
  const locationData = getRemoteWorkData();

  return (
    <BaseChart
      data={locationData}
      lines={[
        {
          dataKey: `location`,
          label: `Where I Work`,
          color: theme.palette.primary.main,
        },
        {
          dataKey: `happiness`,
          label: `Happiness`,
          color: theme.palette.secondary.main,
        },
        {
          dataKey: `productivity`,
          label: `Productivity`,
          color: colors.charts.green,
        },
      ]}
      title="Remote Work"
      xAxis={{
        dataKey: `year`,
        ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        tickFormatter: get18AdjustedAgeFormatter(),
      }}
      yAxis={{
        ticks: [OFFICE, HOME],
        tickFormatter: (val: number): string => {
          if (val === OFFICE) {
            return `Office`;
          }
          if (val === HOME) {
            return `Home`;
          }
          return ``;
        },
      }}
      yAxisRight={{
        ticks: [LOW, HIGH],
        tickFormatter: (val: number): string => {
          if (val === 20) {
            return `Lower`;
          }
          if (val === 80) {
            return `Higher`;
          }
          return ``;
        },
      }}
    />
  );
};

export default RemoteWork;
