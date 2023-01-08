import { Coordinate, Grid, Visited } from '../types';

const mod = (n: number, d: number): number => {
  return ((n % d) + d) % d;
};

const hasWind = (
  winds: Grid,
  location: Coordinate,
  minutes: number,
  rows: number,
  cols: number
): boolean => {
  const x = location.x - 1;
  const y = location.y - 1;

  const southCell = winds[mod(y - minutes, rows)][x];
  const northCell = winds[mod(y + minutes, rows)][x];
  const eastCell = winds[y][mod(x - minutes, cols)];
  const westCell = winds[y][mod(x + minutes, cols)];

  if (
    southCell.kind === `wall` ||
    northCell.kind === `wall` ||
    eastCell.kind === `wall` ||
    westCell.kind === `wall`
  ) {
    throw new Error();
  }

  return (
    southCell.blizzard.south ||
    northCell.blizzard.north ||
    westCell.blizzard.west ||
    eastCell.blizzard.east
  );

  return false;
};

const canMove = (
  winds: Grid,
  location: Coordinate,
  start: Coordinate,
  end: Coordinate,
  rows: number,
  cols: number,
  minutes: number,
  visited: Visited
): boolean => {
  const { x, y } = location;
  if ((y === start.y && x === start.x) || (y === end.y && x === end.x)) {
    return true;
  }
  if (
    y < 0 || // above top wall
    y === 0 || // on top wall
    y > rows || // on bottom wall
    x === 0 || // left wall
    x === cols + 1 // right wall
  ) {
    return false;
  }

  return (
    !hasWind(winds, location, minutes, rows, cols) &&
    !visited[y][x][minutes % (rows * cols)]
  );
};

export default (
  winds: Grid,
  location: Coordinate,
  start: Coordinate,
  end: Coordinate,
  rows: number,
  cols: number,
  minutes: number,
  visited: Visited
): Array<Coordinate> => {
  const possibleMoves = [
    { x: location.x, y: location.y },
    { x: location.x - 1, y: location.y },
    { x: location.x + 1, y: location.y },
    { x: location.x, y: location.y + 1 },
    { x: location.x, y: location.y - 1 },
  ];

  return possibleMoves.filter((candidate): boolean => {
    return canMove(winds, candidate, start, end, rows, cols, minutes, visited);
  });
};
