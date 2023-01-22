import { InvalidParsingError } from '../../errors';

import { getInput, getSectionsFromRawInput } from '../../utils';

export enum Fill {
  Elf = `#`,
  Grove = `.`,
}

export type Grid = Array<Array<Fill>>;

export default (): Grid => {
  const rawInput = getInput(`./input/d23.txt`);

  const sections = getSectionsFromRawInput(rawInput)[0];
  return sections.map((row) => {
    return row.split(``).map((c) => {
      if (c === `#`) {
        return Fill.Elf;
      } else if (c === `.`) {
        return Fill.Grove;
      } else {
        throw new InvalidParsingError(`unexpected input ${c}`);
      }
    });
  });
};
