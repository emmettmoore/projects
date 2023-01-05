import { Fill, Grid } from '../getGrid';

export default (grid: Grid, num: number): void => {
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
