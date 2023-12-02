import { Fill, Grid } from '../getGrid';

import getProposal, { Proposal } from './getProposal';
import { Direction } from './types';
export default (
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
