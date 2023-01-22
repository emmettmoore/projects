import { getInput, getSectionsFromRawInput } from '../../utils';

export default (): Array<Array<string>> => {
  const rawInput = getInput(`./input/d3p1.txt`);

  return getSectionsFromRawInput(rawInput);
};
