import { Grid } from '../getGrid';

export default (grid: Grid): void => {
  grid.forEach((row) => {
    // eslint-disable-next-line no-console
    console.log(row.join(``));
  });
};
