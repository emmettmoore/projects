import { getInput, getStringInputSections } from '../../utils';

export interface Coordinate {
  x: number;
  y: number;
}

export default (): Array<Array<Coordinate>> => {
  const rawInput = getInput(`./input/d14p1.txt`);
  return getStringInputSections(rawInput, ` -> `).map((line) => {
    return line.map((stringCoord) => {
      const [x, y] = stringCoord.split(`,`).map((stringDim) => {
        return parseInt(stringDim, 10);
      });

      return { x, y };
    });
  });
};
