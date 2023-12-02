import { getInput, getStringInputSections } from '../../../utils';
import { InvalidParsingError } from '../../../errors';

export type Directive = `noop` | `addx`;

export type Instruction =
  | {
      directive: `noop`;
    }
  | {
      directive: `addx`;
      num: number;
    };

export default (): Array<Instruction> => {
  const rawInput = getInput(`./input/d10p1.txt`);
  return getStringInputSections(rawInput, ` `).map(([directive, num]) => {
    if (directive === `noop`) {
      return { directive };
    } else if (directive === `addx`) {
      return {
        directive,
        num: parseInt(num, 10),
      };
    }

    throw new InvalidParsingError();
  });
};
