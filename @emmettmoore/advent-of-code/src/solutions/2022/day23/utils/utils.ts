import { Fill, Grid } from '../getGrid';

import { Proposal } from './getProposal';
import { Direction } from './types';

export const reorderDirections = (directions: Array<Direction>): void => {
  const direction = directions.shift();

  if (!direction) {
    throw new Error();
  }

  directions.push(direction);
};

export const initDirections = (): Array<Direction> => {
  return [Direction.North, Direction.South, Direction.West, Direction.East];
};

export const applyProposals = (
  grid: Grid,
  proposals: Array<Proposal>
): void => {
  proposals.forEach(({ currentCoordinate, nextCoordinate }) => {
    grid[currentCoordinate.y][currentCoordinate.x] = Fill.Grove;
    grid[nextCoordinate.y][nextCoordinate.x] = Fill.Elf;
  });
};

export const countGroves = (grid: Grid): number => {
  let count = 0;
  grid.forEach((row) => {
    row.forEach((c) => {
      if (c === Fill.Grove) {
        count += 1;
      }
    });
  });
  return count;
};
