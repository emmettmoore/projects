import getGrid, { Fill, Grid } from '../getGrid';

import { addSpace } from './utils';

import { Direction } from './types';

import getProposal, { Proposal } from './getProposal';
import getValidProposals from './getValidProposals';
import removeExtraSpace from './removeExtraSpace';

const getRoundProposals = (
  grid: Grid,
  directionOrder: Array<Direction>
): Array<Proposal> => {
  const proposals = new Array<Proposal>();
  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < grid[0].length; x += 1) {
      if (grid[y][x] === Fill.Elf) {
        const proposal = getProposal(grid, { x, y }, directionOrder);
        if (proposal) {
          proposals.push(proposal);
        }
      }
    }
  }

  return proposals;
};

const reorderDirections = (directions: Array<Direction>): void => {
  const direction = directions.shift();

  if (!direction) {
    throw new Error();
  }

  directions.push(direction);
};

const initDirections = (): Array<Direction> => {
  return [Direction.North, Direction.South, Direction.West, Direction.East];
};

const applyProposals = (grid: Grid, proposals: Array<Proposal>): void => {
  proposals.forEach(({ currentCoordinate, nextCoordinate }) => {
    grid[currentCoordinate.y][currentCoordinate.x] = Fill.Grove;
    grid[nextCoordinate.y][nextCoordinate.x] = Fill.Elf;
  });
};

const countGroves = (grid: Grid): number => {
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

export default async (): Promise<number> => {
  let grid = getGrid();
  addSpace(grid, 10);

  const directionOrder = initDirections();
  for (let i = 0; i < 10; i += 1) {
    const proposals = getRoundProposals(grid, directionOrder);
    const validProposals = getValidProposals(proposals);
    reorderDirections(directionOrder);

    applyProposals(grid, validProposals);
  }

  grid = removeExtraSpace(grid);
  return countGroves(grid);
};
