import { Fill, Grid } from '../getGrid';

export const logGrid = (grid: Grid): void => {
  grid.forEach((row) => {
    // eslint-disable-next-line no-console
    console.log(row.join(``));
  });
};

export const addSpace = (grid: Grid, num: number): void => {
  grid.forEach((row) => {
    for (let i = 0; i < num; i += 1) {
      row.unshift(Fill.Grove);
      row.push(Fill.Grove);
    }
  });
  for (let i = 0; i < num; i += 1) {
    grid.unshift(new Array<Fill>(grid[0].length).fill(Fill.Grove));
    grid.push(new Array<Fill>(grid[0].length).fill(Fill.Grove));
  }
};
