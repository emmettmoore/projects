import { Position } from '../types';

export default (
  nextHeadPosition: Position,
  currentTailPosition: Position
): Position | null => {
  /*
    If the head is ever two steps directly up, down, left, or
    right from the tail, the tail must also move one step
    in that direction so it remains close enough:
  */

  if (
    nextHeadPosition.x === currentTailPosition.x + 2 &&
    nextHeadPosition.y === currentTailPosition.y
  ) {
    // tail directly right of head
    return {
      x: currentTailPosition.x + 1,
      y: currentTailPosition.y,
    };
  }

  if (
    nextHeadPosition.x === currentTailPosition.x - 2 &&
    nextHeadPosition.y === currentTailPosition.y
  ) {
    // tail directly left of head
    return {
      x: currentTailPosition.x - 1,
      y: currentTailPosition.y,
    };
  }

  if (
    nextHeadPosition.x === currentTailPosition.x &&
    nextHeadPosition.y === currentTailPosition.y - 2
  ) {
    // tail directly up from head
    return {
      x: currentTailPosition.x,
      y: currentTailPosition.y - 1,
    };
  }

  if (
    nextHeadPosition.x === currentTailPosition.x &&
    nextHeadPosition.y === currentTailPosition.y + 2
  ) {
    // tail directly down from head
    return {
      x: currentTailPosition.x,
      y: currentTailPosition.y + 1,
    };
  }

  return null;
};
