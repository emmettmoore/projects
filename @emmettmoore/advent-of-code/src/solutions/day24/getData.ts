import { getInput, getSectionsFromRawInput } from '../../utils';
import { InvalidParsingError } from '../../errors';

import { Grid, Coordinate } from './types';

export default (): {
  grid: Grid;
  start: Coordinate;
  end: Coordinate;
} => {
  const rawInput = getInput(`./input/d24.txt`);

  const sections = getSectionsFromRawInput(rawInput)[0];

  const grid: Grid = sections.map((row) => {
    return row.split(``).map((c) => {
      if (c === `#`) {
        return { kind: `wall` };
      }
      if (c === `.`) {
        return {
          kind: `ground`,
          blizzard: {
            north: false,
            east: false,
            west: false,
            south: false,
          },
        };
      }
      if (c === `^`) {
        return {
          kind: `ground`,
          blizzard: {
            north: true,
            east: false,
            west: false,
            south: false,
          },
        };
      }
      if (c === `>`) {
        return {
          kind: `ground`,
          blizzard: {
            north: false,
            east: true,
            west: false,
            south: false,
          },
        };
      }
      if (c === `<`) {
        return {
          kind: `ground`,
          blizzard: {
            north: false,
            east: false,
            west: true,
            south: false,
          },
        };
      }
      if (c === `v`) {
        return {
          kind: `ground`,
          blizzard: {
            north: false,
            east: false,
            west: false,
            south: true,
          },
        };
      }

      throw new InvalidParsingError();
    });
  });

  return {
    grid,
    start: { x: 1, y: 0 },
    end: { x: grid[0].length - 2, y: grid.length - 1 },
  };
};
