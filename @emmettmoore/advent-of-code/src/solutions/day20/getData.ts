import { getInput, getNumberSectionsFromRawInput } from '../../utils';

export default (): Array<number> => {
  const rawInput = getInput(`./input/d20small.txt`);

  return getNumberSectionsFromRawInput(rawInput)[0];
};
