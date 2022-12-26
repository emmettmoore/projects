import { InvalidParsingError } from '../../errors';
import { Coordinate } from './getData';

export type Fill = `.` | `o` | `#`;
export type Cave = Array<Array<Fill>>;

export const AIR = `.`;
export const SAND = `o`;
export const ROCK = `#`;

export const produceSand = (cave: Cave): boolean => {
  let p = {
    x: 500,
    y: 0,
  };

  let fellIntoAbyss = false;
  while (true) {
    // straight down
    if (p.y + 1 >= cave.length) {
      fellIntoAbyss = true;
      break;
    }
    if (cave[p.y + 1][p.x] === AIR) {
      p = {
        x: p.x,
        y: p.y + 1,
      };
    } else if (cave[p.y + 1][p.x - 1] === AIR) {
      p = {
        x: p.x - 1,
        y: p.y + 1,
      };
    } else if (cave[p.y + 1][p.x + 1] === AIR) {
      p = {
        x: p.x + 1,
        y: p.y + 1,
      };
    } else {
      cave[p.y][p.x] = SAND;
      break;
    }
  }
  return fellIntoAbyss;
};

export const getDimensions = (data: Array<Array<Coordinate>>): Coordinate => {
  let maxX = 0;
  let maxY = 0;

  data.forEach((row) => {
    row.forEach((p) => {
      if (p.x > maxX) {
        maxX = p.x;
      }
      if (p.y > maxY) {
        maxY = p.y;
      }
    });
  });
  return {
    x: maxX + 1,
    y: maxY + 1,
  };
};

const fillVertical = (
  cave: Cave,
  x: number,
  minY: number,
  maxY: number
): void => {
  for (let i = minY; i <= maxY; i += 1) {
    cave[i][x] = ROCK;
  }
};

const fillHorizontal = (
  cave: Cave,
  y: number,
  minX: number,
  maxX: number
): void => {
  for (let i = minX; i <= maxX; i += 1) {
    cave[y][i] = ROCK;
  }
};

export const logCave = (cave: Cave): void => {
  cave.forEach((row) => {
    // eslint-disable-next-line no-console
    console.log(row.join(``));
    // eslint-disable-next-line no-console
  });
};

export const initCave = async (
  data: Array<Array<Coordinate>>
): Promise<Cave> => {
  const dimensions = getDimensions(data);

  const cave: Cave = new Array<Array<Fill>>();
  for (let i = 0; i < dimensions.y; i += 1) {
    const row = new Array<Fill>();
    for (let j = 0; j < dimensions.x * 2; j += 1) {
      row.push(AIR);
    }
    cave.push(row);
  }

  for (let j = 0; j < data.length; j += 1) {
    for (let i = 1; i < data[j].length; i += 1) {
      const left = data[j][i - 1];

      const right = data[j][i];

      if (left.x === right.x) {
        fillVertical(
          cave,
          left.x,
          Math.min(left.y, right.y),
          Math.max(left.y, right.y)
        );
      } else if (left.y === right.y) {
        fillHorizontal(
          cave,
          left.y,
          Math.min(left.x, right.x),
          Math.max(left.x, right.x)
        );
      } else {
        throw new InvalidParsingError();
      }
    }
  }

  return cave;
};
