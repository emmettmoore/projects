import getData from '../getData';
import {
  getHeadPositions,
  Position,
  getTailPositions,
  getNumUniquePositions,
} from '../positionUtils';

const LAST_TAIL_POSITION = 9;
export default async (): Promise<number> => {
  const moves = getData();

  const headPositions = getHeadPositions(moves);
  let aheadPositions: Array<Position> = headPositions;
  let tailPositions = new Array<Position>();

  let i = 1;
  while (i <= LAST_TAIL_POSITION) {
    tailPositions = getTailPositions(aheadPositions);
    aheadPositions = tailPositions;
    i += 1;
  }

  return getNumUniquePositions(tailPositions);
};
