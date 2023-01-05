import getGrid from '../getGrid';

import {
  getValidProposals,
  addSpace,
  getRoundProposals,
  reorderDirections,
  initDirections,
  applyProposals,
} from '../utils';

export default async (): Promise<number> => {
  const grid = getGrid();
  addSpace(grid, 300);

  const directionOrder = initDirections();
  let round = 1;

  while (true) {
    const proposals = getRoundProposals(grid, directionOrder);
    if (proposals.length === 0) {
      break;
    }
    const validProposals = getValidProposals(proposals);
    applyProposals(grid, validProposals);
    reorderDirections(directionOrder);

    round += 1;
  }

  return round;
};
