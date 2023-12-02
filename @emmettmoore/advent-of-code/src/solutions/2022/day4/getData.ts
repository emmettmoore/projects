import { getInput, getStringInputSections } from '../../../utils';

export default (): Array<Array<string>> => {
  const rawInput = getInput(`./input/d4p1.txt`);
  return getStringInputSections(rawInput, `,`);
};
