import wait from 'waait';
import { Fill, Coordinate, Grid } from '../types';

import getData from '../getData';

import { getCandidates, logGrid, getNextGrid, getGridKey } from '../utils';

export default async (): Promise<number> => {
  const { grid, start, end } = getData();

  const queue = new Array<{
    grid: Grid;
    location: Coordinate;
    minutes: number;
  }>();

  const visited = new Set<string>();

  queue.push({
    grid,
    location: start,
    minutes: 0,
  });

  let min = Infinity;

  while (true) {
    const current = queue.shift();

    if (!current) {
      break;
    }

    const { grid: currentGrid, location, minutes } = current;
    console.log(`minutes: ${minutes}`);
    // console.log();
    // logGrid(currentGrid, location);
    // console.log();

    if (location.x === end.x && location.y === end.y) {
      if (minutes < min) {
        min = minutes;
      }
      continue;
    }

    const nextGrid = getNextGrid(currentGrid, minutes === 2);

    const candidates = getCandidates(location, nextGrid, start, end);

    candidates.forEach((candidate) => {
      const key = getGridKey(nextGrid, candidate);
      if (!visited.has(key)) {
        visited.add(key);
        queue.push({
          grid: nextGrid,
          location: candidate,
          minutes: minutes + 1,
        });
      }
    });
  }

  return min;
};
