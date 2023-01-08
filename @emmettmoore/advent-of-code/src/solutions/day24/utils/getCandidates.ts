import { Fill, Coordinate, Grid } from '../types';

const hasBlizzard = (fill: Fill): boolean => {
  if (fill.kind === `wall`) {
    return false;
  }

  const blizzard = fill.blizzard;

  return blizzard.north || blizzard.south || blizzard.east || blizzard.west;
};

export default (
  location: Coordinate,
  nextGrid: Grid,
  start: Coordinate,
  end: Coordinate
): Array<Coordinate> => {
  const possibleMoves = [
    { x: location.x, y: location.y },
    { x: location.x - 1, y: location.y },
    { x: location.x + 1, y: location.y },
    { x: location.x, y: location.y + 1 },
    { x: location.x, y: location.y - 1 },
  ];

  return possibleMoves.filter(({ x, y }) => {
    if ((x === start.x && y === start.y) || (x === end.x && y === end.y)) {
      return true;
    }
    if (
      x === 0 ||
      x === nextGrid[0].length - 1 ||
      y === 0 ||
      y === nextGrid.length - 1
    ) {
      // wall, minus start positions
      return false;
    }

    if (
      x < 0 ||
      x > nextGrid[0].length - 1 ||
      y < 0 ||
      y > nextGrid.length - 1
    ) {
      return false;
    }

    return !hasBlizzard(nextGrid[y][x]);
  });
};
