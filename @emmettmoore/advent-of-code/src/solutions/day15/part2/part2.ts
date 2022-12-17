import { forEachSeries } from 'p-iteration';
import getData from '../getData';

import { getRange, getUniqueCoordsAtY } from '../utils';

const MIN_DIM = 0;
const MAX_DIM = 20; // 4000000;

export default async (): Promise<number> => {
  const scans = getData();

  for (let y = MIN_DIM; y < MAX_DIM; y += 1) {
    let min: number | null = null;
    let max: number | null = null;

    await forEachSeries(scans, async (scan) => {
      const scanRangeAtY = await getRange(scan, y);
      if (!scanRangeAtY) {
        return;
      }

      min = min === null ? scanRangeAtY.min : Math.min(min, scanRangeAtY.min);
      max = max === null ? scanRangeAtY.max : Math.max(max, scanRangeAtY.max);
    });

    if (min === null || max === null) {
      throw new Error();
    }

    console.log({ min, max });
    if (min > MIN_DIM || max < MAX_DIM) {
      break;
    }
  }

  return 0;
};
