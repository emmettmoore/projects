import { findPosition, subStartAndEnd, findShortestPath } from '../utils';

import getData from '../getData';

export default async (): Promise<number> => {
  const data = getData();

  const startPosition = findPosition(data, `S`);
  const endPosition = findPosition(data, `E`);

  const grid = subStartAndEnd(data);

  const shortestPath = findShortestPath(grid, startPosition, endPosition);

  return shortestPath;
};
