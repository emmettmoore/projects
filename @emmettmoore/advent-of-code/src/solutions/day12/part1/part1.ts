import { InvalidParsingError } from '../../../errors';

import getData from '../getData';

const LETTER_ORDERS = `abcdefghijklmnopqrstuvwxyz`.split(``);

interface Position {
  x: number;
  y: number;
}

const VISITED_POSITIONS = new Set<string>();

const findLetterIndex = (currentLetter: string): number => {
  const i = LETTER_ORDERS.findIndex((s) => {
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

const subStartAndEnd = (data: Array<Array<string>>): Array<Array<string>> => {
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

const findPosition = (
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

const findShortestPath = (
  grid: Array<Array<string>>,
  start: Position,
  end: Position
): number => {
  const queue = new Array<[Position, number]>();
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

      if (canMove && !VISITED_POSITIONS.has(nextPositionKey)) {
        VISITED_POSITIONS.add(nextPositionKey);
        queue.unshift([nextPosition, steps + 1]);
      }
    });
  }

  if (!final) {
    throw new Error(`Couldn't find end :(`);
  }

  return final[1];
};

export default async (): Promise<number> => {
  const data = getData();

  const startPosition = findPosition(data, `S`);
  const endPosition = findPosition(data, `E`);

  const grid = subStartAndEnd(data);

  const shortestPath = findShortestPath(grid, startPosition, endPosition);

  return shortestPath;
};
