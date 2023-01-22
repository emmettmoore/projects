import { forEachSeries } from 'p-iteration';
import getData from '../getData';

import { getRange, getUniqueCoordsAtY } from '../utils';

const TARGET_Y = 10; // 2000000;

export default async (): Promise<number> => {
  const scans = getData();

  let min: number | null = null;
  let max: number | null = null;

  await forEachSeries(scans, async (scan) => {
    const scanRangeAtY = await getRange(scan, TARGET_Y);
    if (!scanRangeAtY) {
      return;
    }

    min = min === null ? scanRangeAtY.min : Math.min(min, scanRangeAtY.min);
    max = max === null ? scanRangeAtY.max : Math.max(max, scanRangeAtY.max);
  });

  if (min === null || max === null) {
    throw new Error();
  }

  const beaconsAtY = getUniqueCoordsAtY(
    scans.map(({ closestBeacon }) => {
      return closestBeacon;
    }),
    TARGET_Y
  );

  return max - min - beaconsAtY.size + 1;
};
