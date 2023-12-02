import { InvalidParsingError } from '../../../../../errors';
import getNextTailPosition from './getNextTailPosition';
import { Position } from '../types';
export default (aheadPositions: Array<Position>): Array<Position> => {
  if (aheadPositions.length < 1) {
    throw new InvalidParsingError();
  }

  let currentTailPosition = aheadPositions[0];
  const allTailPositions = new Array<Position>(currentTailPosition);
  for (let i = 1; i < aheadPositions.length; i += 1) {
    const nextHeadPosition = aheadPositions[i];

    const nextTailPosition = getNextTailPosition(
      nextHeadPosition,
      currentTailPosition
    );

    allTailPositions.push(nextTailPosition);

    currentTailPosition = nextTailPosition;
  }

  return allTailPositions;
};
