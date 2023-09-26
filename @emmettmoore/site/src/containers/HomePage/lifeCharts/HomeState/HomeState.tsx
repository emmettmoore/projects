import { useTheme } from '@mui/material';
import { BaseChart } from '../../components';
import getHomeStateData from './getHomeStateData';

const HomeState = (): JSX.Element => {
  const theme = useTheme();
  const locationData = getHomeStateData();

  return (
    <BaseChart
      data={locationData}
      hideLegend
      lines={[
        {
          dataKey: `location`,
          label: `Home (State)`,
          color: theme.palette.primary.main,
        },
      ]}
      title="Home"
      xAxis={{
        dataKey: `age`,
        label: `Age`,
        ticks: [0, 6, 12, 18, 24, 30],
      }}
      yAxis={{
        ticks: [33, 66],
        tickFormatter: (val: number): string => {
          if (val === 33) {
            return `TX`;
          }
          if (val === 66) {
            return `MA`;
          }
          return ``;
        },
      }}
    />
  );
};

export default HomeState;
