import { Fill, Chamber } from './types';
import { WIDTH } from './constants';

export const findRockHighPoint = (chamber: Chamber): number => {
  chamber.findIndex((row, i) => {
    if (row.includes(Fill.Rock)) {
      return i;
    }
  });

  return chamber.length;
};

export default (chamber: Chamber): void => {
  const rockHighPoint = findRockHighPoint(chamber);

  if (rockHighPoint < 3) {
    const height = 3 - rockHighPoint;
    for (let i = 0; i < height; i += 1) {
      chamber.unshift(new Array<Fill>(WIDTH).fill(Fill.Air));
    }
  }
};
