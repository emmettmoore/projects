import { InvalidParsingError } from '../../errors';
export interface Position {
  x: number;
  y: number;
}

export class NoPathToSummitError extends Error {}

const findLetterIndex = (currentLetter: string): number => {
  const letterOrders = `abcdefghijklmnopqrstuvwxyz`.split(``);
  const i = letterOrders.findIndex((s) => {
    return s === currentLetter;
  });

  if (i < 0) {
    throw new InvalidParsingError();
  }

  return i;
};

const canMoveToNext = (currentLetter: string, nextLetter: string): boolean => {
  if (currentLetter.length !== 1 || nextLetter.length !== 1) {
    throw new InvalidParsingError();
  }

  const currentIndex = findLetterIndex(currentLetter);
  const nextIndex = findLetterIndex(nextLetter);

  return currentIndex >= nextIndex - 1;
};

export const subStartAndEnd = (
  data: Array<Array<string>>
): Array<Array<string>> => {
  return data.map((row) => {
    return row.map((cell) => {
      if (cell === `S`) {
        return `a`;
      }
      if (cell === `E`) {
        return `z`;
      }
      return cell;
    });
  });
};
const getPositionKey = (position: Position): string => {
  return `x${position.x}y${position.y}`;
};

export const findPosition = (
  map: Array<Array<string>>,
  letter: `S` | `E`
): Position => {
  for (let y = 0; y < map.length; y += 1) {
    for (let x = 0; x < map[0].length; x += 1) {
      if (map[y][x] === letter) {
        return {
          x,
          y,
        };
      }
    }
  }
  throw new InvalidParsingError();
};

const getPositionsToCheck = (
  position: Position,
  length: number,
  height: number
): Array<Position> => {
  const directionalPositions = [
    { x: position.x, y: position.y + 1 },
    { x: position.x, y: position.y - 1 },
    { x: position.x - 1, y: position.y },
    { x: position.x + 1, y: position.y },
  ].filter((p) => {
    return p.x >= 0 && p.x < length && p.y >= 0 && p.y < height;
  });

  return directionalPositions;
};

export const findShortestPath = (
  grid: Array<Array<string>>,
  start: Position,
  end: Position
): number => {
  const queue = new Array<[Position, number]>();
  const visitedPositions = new Set<string>();
  queue.unshift([start, 0]);

  let final: [Position, number] | null = null;

  while (queue.length > 0) {
    const current = queue.pop();
    if (!current) {
      throw new InvalidParsingError();
    }

    const [currentPosition, steps] = current;

    if (currentPosition.x === end.x && currentPosition.y === end.y) {
      final = current;
      break;
    }

    const positionsToCheck = getPositionsToCheck(
      currentPosition,
      grid[0].length,
      grid.length
    );

    positionsToCheck.forEach((nextPosition) => {
      const canMove = canMoveToNext(
        grid[currentPosition.y][currentPosition.x],
        grid[nextPosition.y][nextPosition.x]
      );

      const nextPositionKey = getPositionKey(nextPosition);

      if (canMove && !visitedPositions.has(nextPositionKey)) {
        visitedPositions.add(nextPositionKey);
        queue.unshift([nextPosition, steps + 1]);
      }
    });
  }

  if (!final) {
    throw new NoPathToSummitError(`Couldn't find end :(`);
  }

  return final[1];
};
