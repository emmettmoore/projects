import { getSectionsFromRawInput, getInput } from '../../utils';

export interface Coordinate {
  x: number;
  y: number;
}

export interface Scan {
  source: Coordinate;
  closestBeacon: Coordinate;
}

export default (): Array<Scan> => {
  const rawInput = getInput(`./input/d15p1.txt`);
  const sections = getSectionsFromRawInput(rawInput)[0];

  return sections
    .map((section) => {
      const parts = section
        .replace(`Sensor at `, ``)
        .replace(`closest beacon is at `, ``)
        .split(`:`);

      return parts.map((string) => {
        const s = `{${string
          .trim()
          .replace(`x`, `"x"`)
          .replace(`y`, `"y"`)
          .replaceAll(`=`, `:`)}}`;

        return JSON.parse(s);
      });
    })
    .map(([source, closestBeacon]) => {
      return {
        source,
        closestBeacon,
      };
    });
};
