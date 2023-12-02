import { Move, Direction } from '../getData';
import { Position } from './types';

const getNextHeadPosition = (
  currentPosition: Position,
  direction: Direction
): Position => {
  if (direction === `U`) {
    return {
      x: currentPosition.x,
      y: currentPosition.y + 1,
    };
  }
  if (direction === `D`) {
    return {
      x: currentPosition.x,
      y: currentPosition.y - 1,
    };
  }
  if (direction === `L`) {
    return {
      x: currentPosition.x - 1,
      y: currentPosition.y,
    };
  }

  if (direction === `R`) {
    return {
      x: currentPosition.x + 1,
      y: currentPosition.y,
    };
  }
  const exhaustiveCheck: never = direction;

  return exhaustiveCheck;
};

export default (moves: Array<Move>): Array<Position> => {
  let currentPosition: Position = { x: 0, y: 0 };

  const allPositions = new Array<Position>(currentPosition);

  moves.forEach((move) => {
    let step = 0;
    while (step < move.num) {
      const nextPosition = getNextHeadPosition(currentPosition, move.direction);

      currentPosition = nextPosition;

      allPositions.push(nextPosition);

      step += 1;
    }
  });

  return allPositions;
};
