import getData, { Scan, Coordinate } from '../getData';

import { getCoordinateKey, getManhattanDist } from '../utils';

const MIN_DIM = 0;
const MAX_DIM = 4_000_000;

const COORD_MULT = [
  [-1, 1],
  [1, -1],
  [-1, -1],
  [1, 1],
];

const testCoordinate = (
  c: Coordinate,
  scans: Array<Scan>,
  beaconSet: Set<string>
): boolean => {
  return Boolean(
    scans.every((scan) => {
      return Boolean(
        getManhattanDist(c, scan.source) > scan.manhattanDistance &&
          !beaconSet.has(getCoordinateKey(c))
      );
    })
  );
};

const checkAllPerimeterCoords = (
  scans: Array<Scan>,
  beaconSet: Set<string>
): Coordinate | null => {
  for (let i = 0; i < scans.length; i += 1) {
    const scan = scans[i];
    const { source, manhattanDistance } = scan;
    const perimeterDist = manhattanDistance + 1;

    for (let dx = 0; dx < perimeterDist; dx += 1) {
      const dy = perimeterDist - dx;
      for (let j = 0; j < COORD_MULT.length; j += 1) {
        const [mx, my] = COORD_MULT[j];
        const c = {
          x: source.x + dx * mx,
          y: source.y + dy * my,
        };

        if (c.x < MIN_DIM || c.y < MIN_DIM || c.x > MAX_DIM || c.y > MAX_DIM) {
          continue;
        }
        if (testCoordinate(c, scans, beaconSet)) {
          return c;
        }
      }
    }
  }

  return null;
};

export default async (): Promise<number> => {
  const scans = getData();

  const beaconSet = new Set<string>();
  scans.forEach(({ closestBeacon }) => {
    beaconSet.add(getCoordinateKey(closestBeacon));
  });

  const c = checkAllPerimeterCoords(scans, beaconSet);

  if (c === null) {
    throw new Error();
  }

  return c.x * MAX_DIM + c.y;
};
