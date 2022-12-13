import getData from '../getData';

import {
  getNumUniquePositions,
  getHeadPositions,
  getTailPositions,
} from '../positionUtils';

export default async (): Promise<number> => {
  const moves = getData();

  const headPositions = getHeadPositions(moves);

  const tailPositions = getTailPositions(headPositions);

  return getNumUniquePositions(tailPositions);
};
