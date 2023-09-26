import { useTheme } from '@mui/material';
import { BaseChart } from '../../components';
import getHomeCityData from './getHomeCityData';
import {
  getYTicks,
  HOUSTON,
  DOVER,
  CAMBRIDGE,
  SOMERVILLE,
  BOSTON,
} from './utils';

const HomeCity = (): JSX.Element => {
  const theme = useTheme();
  const locationData = getHomeCityData();

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
        ticks: getYTicks(),
        tickFormatter: (val: number): string => {
          if (val === HOUSTON) {
            return `Houston`;
          }
          if (val === DOVER) {
            return `Dover`;
          }
          if (val === SOMERVILLE) {
            return `Somerville`;
          }
          if (val === CAMBRIDGE) {
            return `Cambridge`;
          }
          if (val === BOSTON) {
            return `Boston`;
          }
          return ``;
        },
      }}
    />
  );
};

export default HomeCity;
