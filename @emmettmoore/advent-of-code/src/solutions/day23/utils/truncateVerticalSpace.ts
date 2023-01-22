import { Fill, Grid } from '../getGrid';

const truncateBottomSpace = (grid: Grid): Grid => {
  let lastIndex = 0;

  grid.forEach((row, i) => {
    if (row.includes(Fill.Elf)) {
      lastIndex = i;
    }
  });

  return grid.slice(0, lastIndex + 1);
};

const truncateTopSpace = (grid: Grid): Grid => {
  const firstIndexWithElf = grid.findIndex((row) => {
    return row.includes(Fill.Elf);
  });

  return grid.slice(firstIndexWithElf);
};

export default (grid: Grid): Grid => {
  return truncateBottomSpace(truncateTopSpace(grid));
};
