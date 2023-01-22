import {
  Position,
  findPosition,
  subStartAndEnd,
  NoPathToSummitError,
  findShortestPath,
} from '../utils';

import getData from '../getData';

export default async (): Promise<number> => {
  const data = getData();

  const endPosition = findPosition(data, `E`);

  const grid = subStartAndEnd(data);

  const allAs = new Array<Position>();

  grid.forEach((row, y) => {
    row.forEach((letter, x) => {
      if (letter === `a`) {
        allAs.push({ x, y });
      }
    });
  });

  const shortestPaths = new Array<number>();
  allAs.forEach((a) => {
    try {
      const shortestPath = findShortestPath(grid, a, endPosition);
      shortestPaths.push(shortestPath);
    } catch (err) {
      if (err instanceof NoPathToSummitError) {
        return;
      }
      throw err;
    }
  });

  return Math.min(...shortestPaths);
};
