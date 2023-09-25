import { useTheme } from '@mui/material';
import { BaseChart } from '../../components';
import getRemoteWorkData from './getRemoteWorkData';

const RemoteWork = (): JSX.Element => {
  const theme = useTheme();
  const locationData = getRemoteWorkData();

  return (
    <BaseChart
      data={locationData}
      hideLegend
      lines={[
        {
          dataKey: `location`,
          label: `Where I Worked`,
          color: theme.palette.primary.main,
        },
      ]}
      title="Where I Worked"
      xAxis={{
        dataKey: `age`,
        label: `Age`,
        ticks: [0, 6, 12, 18, 24, 30],
      }}
      yAxis={{
        ticks: [20, 50, 80],
        tickFormatter: (val: number): string => {
          if (val === 20) {
            return `I didn't`;
          }
          if (val === 50) {
            return `Office`;
          }
          if (val === 80) {
            return `Home`;
          }
          return ``;
        },
      }}
    />
  );
};

export default RemoteWork;
