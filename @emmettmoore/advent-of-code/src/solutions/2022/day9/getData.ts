import { getInput, getStringInputSections } from '../../../utils';
import { InvalidParsingError } from '../../../errors';

export type Direction = `U` | `D` | `L` | `R`;

export interface Move {
  num: number;
  direction: Direction;
}

export default (): Array<Move> => {
  const rawInput = getInput(`./input/d9p1.txt`);
  return getStringInputSections(rawInput, ` `).map(([direction, num]) => {
    if (
      direction !== `U` &&
      direction !== `D` &&
      direction !== `L` &&
      direction !== `R`
    ) {
      throw new InvalidParsingError();
    }
    return {
      direction,
      num: parseInt(num, 10),
    };
  });
};
