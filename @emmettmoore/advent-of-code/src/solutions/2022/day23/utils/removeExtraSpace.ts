import { Fill, Grid } from '../getGrid';

import truncateVerticalSpace from './truncateVerticalSpace';

const truncateRightSpace = (grid: Grid): Grid => {
  let max = 0;

  grid.forEach((row) => {
    let lastElf = 0;
    row.forEach((c, i) => {
      if (c === Fill.Elf) {
        lastElf = i;
      }
    });

    if (lastElf >= max) {
      max = lastElf;
    }
  });

  return grid.map((row) => {
    return row.slice(0, max + 1);
  });
};

const truncateLeftSpace = (grid: Grid): Grid => {
  let max = grid.length;

  grid.forEach((row) => {
    const firstElf = row.findIndex((c) => {
      return c === Fill.Elf;
    });

    if (firstElf !== -1 && firstElf < max) {
      max = firstElf;
    }
  });

  return grid.map((row) => {
    return row.slice(max);
  });
};

const truncateHorizontalSpace = (grid: Grid): Grid => {
  return truncateRightSpace(truncateLeftSpace(grid));
};

export default (grid: Grid): Grid => {
  return truncateHorizontalSpace(truncateVerticalSpace(grid));
};
