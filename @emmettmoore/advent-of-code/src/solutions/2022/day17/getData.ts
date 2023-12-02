import { InvalidParsingError } from '../../../errors';
import { getInput } from '../../../utils';

export type Direction = `<` | `>`;

export default (): Array<Direction> => {
  const rawInput = getInput(`./input/d17p1.txt`);

  return rawInput.split(``).map((c) => {
    if (c === `<` || c === `>`) {
      return c;
    } else {
      throw new InvalidParsingError();
    }
  });
};
