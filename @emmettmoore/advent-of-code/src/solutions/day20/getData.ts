import { getInput, getNumberSectionsFromRawInput } from '../../utils';

export default (): Array<number> => {
  const rawInput = getInput(`./input/d20p1.txt`);

  return getNumberSectionsFromRawInput(rawInput)[0];
};
