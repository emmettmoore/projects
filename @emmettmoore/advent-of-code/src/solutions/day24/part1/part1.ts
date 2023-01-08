import { Visited, Coordinate } from '../types';

import getData from '../getData';

import { getCandidates } from '../utils';

export default async (): Promise<number> => {
  const { grid, start, end } = getData();

  const rows = grid.length - 2;
  const columns = grid[0].length - 2;

  const visited: Visited = new Array(rows + 2).fill(undefined).map(() => {
    return new Array(columns + 2).fill(undefined).map(() => {
      return new Array(rows * columns).fill(false);
    });
  });

  const queue = new Array<{
    location: Coordinate;
    minutes: number;
  }>();

  const winds = grid.slice(1, -1).map((line) => {
    return line.slice(1, line.length - 1);
  });

  queue.push({
    location: start,
    minutes: 0,
  });

  while (true) {
    const current = queue.shift();

    if (!current) {
      break;
    }

    const { location, minutes } = current;
    if (location.x === end.x && location.y === end.y) {
      return minutes;
    }

    const candidates = getCandidates(
      winds,
      location,
      start,
      end,
      rows,
      columns,
      minutes + 1,
      visited
    );

    candidates.forEach((candidate) => {
      queue.push({
        location: candidate,
        minutes: minutes + 1,
      });
      visited[candidate.y][candidate.x][(minutes + 1) % (rows * columns)] =
        true;
    });
  }

  throw new Error(`Unexpected: no path`);
};
