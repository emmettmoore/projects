import { Grid, Visited, Coordinate } from '../types';

import getCandidates from './getCandidates';

export default (
  winds: Grid,
  start: Coordinate,
  end: Coordinate,
  rows: number,
  columns: number,
  minute: number
): number => {
  const queue = new Array<{
    location: Coordinate;
    minutes: number;
  }>();

  const visited: Visited = new Array(rows + 2).fill(undefined).map(() => {
    return new Array(columns + 2).fill(undefined).map(() => {
      return new Array(rows * columns).fill(false);
    });
  });

  queue.push({
    location: start,
    minutes: minute,
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

  return minute;
};
