import getGrid from '../getGrid';

import {
  getValidProposals,
  addSpace,
  removeExtraSpace,
  getRoundProposals,
  reorderDirections,
  initDirections,
  applyProposals,
  countGroves,
} from '../utils';

export default async (): Promise<number> => {
  let grid = getGrid();
  addSpace(grid, 10);

  const directionOrder = initDirections();
  for (let i = 0; i < 10; i += 1) {
    const proposals = getRoundProposals(grid, directionOrder);
    const validProposals = getValidProposals(proposals);
    applyProposals(grid, validProposals);
    reorderDirections(directionOrder);
  }

  grid = removeExtraSpace(grid);
  return countGroves(grid);
};
