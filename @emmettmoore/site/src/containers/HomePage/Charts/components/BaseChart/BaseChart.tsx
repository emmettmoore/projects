/* eslint-disable react/no-array-index-key */
import styles from './BaseChart.module.scss';
import { Typography, useTheme } from '@mui/material';

import {
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

import CustomLegend from './CustomLegend';

interface Props {
  title: string;
  data: Array<{ [key: string]: number | string }>;
  lines: Array<{
    dataKey: string;
    label: string;
    color: string;
  }>;
  xAxis: {
    dataKey: string;
    label?: string;
    ticks?: Array<number>;
    tickFormatter?: (val: number) => string;
  };
  yAxis: {
    label?: string;
    tickFormatter?: (val: number) => string;
    ticks?: Array<number>;
  };
  hideLegend?: boolean;
}

const getLifeSegments = (): Array<number> => {
  return [0, 6, 12, 18, 24, 30];
};

const BaseChart = ({
  title,
  lines,
  data,
  xAxis,
  yAxis,
  hideLegend = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <Typography sx={{ mb: 4 }} variant="h4">
        {title}
      </Typography>
      <ResponsiveContainer className={styles.responsiveContainer} height={200}>
        <LineChart data={data}>
          {lines.map((line) => {
            return (
              <Line
                key={line.dataKey}
                dataKey={line.dataKey}
                dot={false}
                name={line.label}
                stroke={line.color}
                strokeWidth={2}
                type="monotone"
              />
            );
          })}
          <YAxis
            label={yAxis.label}
            stroke={theme.palette.primary.main}
            tick={{
              fill: theme.palette.primary.main,
              fontFamily: theme.typography.body1.fontFamily,
              fontSize: theme.typography.body1.fontSize,
            }}
            tickCount={yAxis.ticks?.length || undefined}
            tickFormatter={yAxis.tickFormatter || undefined}
            ticks={yAxis.ticks || [0, 50, 100]}
            type="number"
            width={79}
          />
          <XAxis
            dataKey={xAxis.dataKey}
            interval="preserveStartEnd"
            label={xAxis.label}
            stroke={theme.palette.primary.main}
            tick={{
              fill: theme.palette.primary.main,
              fontFamily: theme.typography.body1.fontFamily,
              fontSize: theme.typography.body1.fontSize,
            }}
            tickCount={xAxis.ticks?.length || undefined}
            tickFormatter={xAxis.tickFormatter || undefined}
            ticks={xAxis.ticks || getLifeSegments()}
            type="number"
          />
          {!hideLegend && <Legend content={CustomLegend} />}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default BaseChart;
