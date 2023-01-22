import getData from '../getData';

import { weatherStorm } from '../utils';

export default async (): Promise<number> => {
  const { grid, start, end } = getData();

  const rows = grid.length - 2;
  const columns = grid[0].length - 2;

  const winds = grid.slice(1, -1).map((line) => {
    return line.slice(1, line.length - 1);
  });

  return weatherStorm(winds, start, end, rows, columns, 0);
};
