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
  yAxisRight?: {
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
  yAxisRight,
  hideLegend = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <Typography sx={{ pl: `84px`, mb: 4 }} variant="h5">
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
                isAnimationActive={false}
                name={line.label}
                stroke={line.color}
                strokeWidth={2}
                type="monotone"
                yAxisId="left"
              />
            );
          })}
          <YAxis
            label={yAxis.label}
            stroke={theme.palette.primary.main}
            tick={{
              fill: theme.palette.primary.main,
              fontFamily: theme.typography.body1.fontFamily,
              fontSize: theme.typography.caption.fontSize,
            }}
            tickCount={yAxis.ticks?.length || undefined}
            tickFormatter={yAxis.tickFormatter || undefined}
            ticks={yAxis.ticks || [0, 50, 100]}
            type="number"
            width={79}
            yAxisId="left"
          />
          <XAxis
            dataKey={xAxis.dataKey}
            interval="preserveStartEnd"
            label={xAxis.label}
            stroke={theme.palette.primary.main}
            tick={{
              fill: theme.palette.primary.main,
              fontFamily: theme.typography.body1.fontFamily,
              fontSize: theme.typography.caption.fontSize,
            }}
            tickCount={xAxis.ticks?.length || undefined}
            tickFormatter={xAxis.tickFormatter || undefined}
            ticks={xAxis.ticks || getLifeSegments()}
            type="number"
          />
          {yAxisRight && (
            <YAxis
              label={yAxisRight.label}
              orientation="right"
              stroke={theme.palette.primary.main}
              tick={{
                fill: theme.palette.primary.main,
                fontFamily: theme.typography.caption.fontFamily,
                fontSize: theme.typography.caption.fontSize,
              }}
              tickCount={yAxisRight.ticks?.length || undefined}
              tickFormatter={yAxisRight.tickFormatter || undefined}
              ticks={yAxisRight.ticks || [0, 50, 100]}
              type="number"
              width={79}
              yAxisId="right"
            />
          )}
          {!hideLegend && <Legend content={CustomLegend} />}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default BaseChart;
