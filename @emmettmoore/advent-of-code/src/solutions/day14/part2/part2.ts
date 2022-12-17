import getData from '../getData';
import { Fill, AIR, ROCK, SAND, Cave, initCave } from '../utils';

const SOURCE_X = 500;
const SOURCE_Y = 0;

export const produceSand = (cave: Cave): boolean => {
  let p = {
    x: SOURCE_X,
    y: SOURCE_Y,
  };

  let stuckAtSource = false;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // straight down
    if (p.y + 1 >= cave.length) {
      throw new Error();
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
      if (p.y === SOURCE_Y && p.x === SOURCE_X) {
        stuckAtSource = true;
      }
      break;
    }
  }

  return stuckAtSource;
};

export default async (): Promise<number> => {
  const data = getData();
  const cave = await initCave(data);
  cave.push(new Array<Fill>(cave[0].length).fill(AIR));
  cave.push(new Array<Fill>(cave[0].length).fill(ROCK));

  let numGrains = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    numGrains += 1;
    const stuckAtSource = await produceSand(cave);
    if (stuckAtSource) {
      break;
    }
  }

  return numGrains;
};
