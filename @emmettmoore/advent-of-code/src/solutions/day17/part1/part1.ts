import getData from '../getData';

const ROCK = `#`;
const AIR = `.`;

type Rock = `#`;
type Air = `.`;
type Fill = Rock | Air;
type Chamber = Array<Array<Fill>>;

const WIDTH = 7;
const HEIGHT = 4;

export const logChamber = (chamber: Chamber): void => {
  chamber.forEach((row) => {
    // eslint-disable-next-line no-console
    console.log(row.join(``));
    // eslint-disable-next-line no-console
  });
};

const initChamber = (): Chamber => {
  return Array(HEIGHT)
    .fill(null)
    .map(() => {
      return new Array<Fill>(WIDTH).fill(AIR);
    });
};

const addHeightToChamber = (chamber: Chamber, height: number): Chamber => {
  return chamber;
};

export default async (): Promise<string> => {
  const data = getData();
  const chamber = initChamber();
  logChamber(chamber);
  return ``;
};
