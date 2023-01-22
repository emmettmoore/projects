import { getInput, getNumberSectionsFromRawInput } from '../../utils';

export default (): Array<Array<number>> => {
  const rawInput = getInput(`./input/d1p1.txt`);
  return getNumberSectionsFromRawInput(rawInput);
};
