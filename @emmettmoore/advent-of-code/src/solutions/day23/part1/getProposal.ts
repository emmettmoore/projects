import { Grid, Fill } from '../getGrid';
import { Direction, Coordinate } from './types';

export interface Proposal {
  currentCoordinate: Coordinate;
  nextCoordinate: Coordinate;
}

const getCoordinatesToCheck = (
  direction: Direction,
  coordinate: Coordinate
): Array<Coordinate> => {
  if (direction === Direction.North) {
    return [
      { x: coordinate.x - 1, y: coordinate.y - 1 },
      { x: coordinate.x, y: coordinate.y - 1 },
      { x: coordinate.x + 1, y: coordinate.y - 1 },
    ];
  }
  if (direction === Direction.South) {
    return [
      { x: coordinate.x - 1, y: coordinate.y + 1 },
      { x: coordinate.x, y: coordinate.y + 1 },
      { x: coordinate.x + 1, y: coordinate.y + 1 },
    ];
  }
  if (direction === Direction.West) {
    return [
      { x: coordinate.x - 1, y: coordinate.y - 1 },
      { x: coordinate.x - 1, y: coordinate.y },
      { x: coordinate.x - 1, y: coordinate.y + 1 },
    ];
  }
  if (direction === Direction.East) {
    return [
      { x: coordinate.x + 1, y: coordinate.y - 1 },
      { x: coordinate.x + 1, y: coordinate.y },
      { x: coordinate.x + 1, y: coordinate.y + 1 },
    ];
  }

  const exhaustiveCheck: never = direction;

  return exhaustiveCheck;
};

const getNextCoordinate = (
  direction: Direction,
  coordinate: Coordinate
): Coordinate => {
  if (direction === Direction.North) {
    return { x: coordinate.x, y: coordinate.y - 1 };
  }
  if (direction === Direction.South) {
    return { x: coordinate.x, y: coordinate.y + 1 };
  }
  if (direction === Direction.West) {
    return { x: coordinate.x - 1, y: coordinate.y };
  }
  if (direction === Direction.East) {
    return { x: coordinate.x + 1, y: coordinate.y };
  }

  const exhaustiveCheck: never = direction;

  return exhaustiveCheck;
};

const getProposalForDirection = (
  grid: Grid,
  coordinate: Coordinate,
  direction: Direction
): Proposal | null => {
  const coordinatesToCheck = getCoordinatesToCheck(direction, coordinate);

  const canMove = coordinatesToCheck.every((c) => {
    return grid[c.y][c.x] === Fill.Grove;
  });

  return canMove
    ? {
        currentCoordinate: coordinate,
        nextCoordinate: getNextCoordinate(direction, coordinate),
      }
    : null;
};

const isIsolated = (grid: Grid, coordinate: Coordinate): boolean => {
  return [
    { x: coordinate.x - 1, y: coordinate.y - 1 },
    { x: coordinate.x - 1, y: coordinate.y },
    { x: coordinate.x - 1, y: coordinate.y + 1 },
    { x: coordinate.x, y: coordinate.y - 1 },
    { x: coordinate.x, y: coordinate.y + 1 },
    { x: coordinate.x + 1, y: coordinate.y - 1 },
    { x: coordinate.x + 1, y: coordinate.y },
    { x: coordinate.x + 1, y: coordinate.y + 1 },
  ].every(({ x, y }) => {
    return grid[y][x] === Fill.Grove;
  });
};

export default (
  grid: Grid,
  coordinate: Coordinate,
  directionOrder: Array<Direction>
): Proposal | null => {
  for (let d = 0; d < directionOrder.length; d += 1) {
    const direction = directionOrder[d];
    if (isIsolated(grid, coordinate)) {
      return null;
    }
    const proposal = getProposalForDirection(grid, coordinate, direction);
    if (proposal !== null) {
      return proposal;
    }
  }

  return null;
};
