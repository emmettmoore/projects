import { Direction, Grid, Coordinate } from '../types';

const getBlizzardNextPosition = (
  grid: Grid,
  coordinate: Coordinate,
  direction: Direction
): Coordinate => {
  if (direction === Direction.North) {
    return {
      x: coordinate.x,
      y: coordinate.y === 1 ? grid.length - 2 : coordinate.y - 1,
    };
  } else if (direction === Direction.South) {
    return {
      x: coordinate.x,
      y: coordinate.y === grid.length - 2 ? 1 : coordinate.y + 1,
    };
  } else if (direction === Direction.East) {
    return {
      x: coordinate.x === grid[0].length - 2 ? 1 : coordinate.x + 1,
      y: coordinate.y,
    };
  } else if (direction === Direction.West) {
    return {
      x: coordinate.x === 1 ? grid[0].length - 2 : coordinate.x - 1,
      y: coordinate.y,
    };
  }

  const exhaustiveCheck: never = direction;

  return exhaustiveCheck;
};

const initGrid = (grid: Grid): Grid => {
  return grid.map((row) => {
    return row.map((fill) => {
      if (fill.kind === `wall`) {
        return { kind: `wall` };
      }
      return {
        kind: `ground`,
        blizzard: {
          north: false,
          south: false,
          east: false,
          west: false,
        },
      };
    });
  });
};

const moveSingleBlizzard = (
  grid: Grid,
  nextGrid: Grid,
  coordinate: Coordinate,
  direction: Direction
): void => {
  const nextPosition = getBlizzardNextPosition(grid, coordinate, direction);
  // if (coordinate.y === 1 && direction === Direction.West) {
  //   console.log(``);
  //   console.log(coordinate);
  //   console.log(nextPosition);
  // }

  const nextFill = nextGrid[nextPosition.y][nextPosition.x];

  if (nextFill.kind === `wall`) {
    throw new Error();
  }

  if (direction === Direction.North) {
    nextFill.blizzard.north = true;
  } else if (direction === Direction.South) {
    nextFill.blizzard.south = true;
  } else if (direction === Direction.West) {
    nextFill.blizzard.west = true;
  } else if (direction === Direction.East) {
    nextFill.blizzard.east = true;
  } else {
    throw new Error(`unexpected direction`);
  }
};

export default (grid: Grid, log: boolean): Grid => {
  if (log) {
    console.time(`initGrid`);
  }
  const nextGrid = initGrid(grid);
  if (log) {
    console.timeEnd(`initGrid`);
  }

  if (log) {
    console.time(`loop`);
  }
  for (let y = 1; y < grid.length - 1; y += 1) {
    for (let x = 1; x < grid[0].length - 1; x += 1) {
      const fill = grid[y][x];

      if (fill.kind === `wall`) {
        throw new Error(`unexpected fill at ${x},${y}`);
      }

      const { north, south, east, west } = fill.blizzard;

      if (north) {
        moveSingleBlizzard(grid, nextGrid, { x, y }, Direction.North);
      }
      if (south) {
        moveSingleBlizzard(grid, nextGrid, { x, y }, Direction.South);
      }
      if (east) {
        moveSingleBlizzard(grid, nextGrid, { x, y }, Direction.East);
      }
      if (west) {
        moveSingleBlizzard(grid, nextGrid, { x, y }, Direction.West);
      }
    }
  }
  if (log) {
    console.timeEnd(`loop`);
    throw new Error();
  }

  return nextGrid;
};
