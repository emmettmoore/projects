import { Position } from '../types';
import getVerticalOrHorizontalMove from './getVerticalOrHorizontalMove';

const getDiagonalMove = (
  nextHeadPosition: Position,
  currentTailPosition: Position
): Position | null => {
  /*
    If the head and tail aren't touching and aren't 
    in the same row or column, the tail always moves one 
    step diagonally to keep up:
  */

  if (
    currentTailPosition.x === nextHeadPosition.x ||
    currentTailPosition.y === nextHeadPosition.y
  ) {
    // are in same row or column
    return null;
  }

  if (
    Math.abs(currentTailPosition.x - nextHeadPosition.x) < 2 &&
    Math.abs(currentTailPosition.y - nextHeadPosition.y) < 2
  ) {
    // still touching
    return null;
  }

  return {
    x:
      currentTailPosition.x +
      (nextHeadPosition.x > currentTailPosition.x ? 1 : -1),
    y:
      currentTailPosition.y +
      (nextHeadPosition.y > currentTailPosition.y ? 1 : -1),
  };
};

export default (
  nextHeadPosition: Position,
  currentTailPosition: Position
): Position => {
  const verticalOrHorizontalMove = getVerticalOrHorizontalMove(
    nextHeadPosition,
    currentTailPosition
  );

  if (verticalOrHorizontalMove) {
    return verticalOrHorizontalMove;
  }

  const diagonalMove = getDiagonalMove(nextHeadPosition, currentTailPosition);

  if (diagonalMove) {
    return diagonalMove;
  }

  // don't move
  return {
    x: currentTailPosition.x,
    y: currentTailPosition.y,
  };
};
