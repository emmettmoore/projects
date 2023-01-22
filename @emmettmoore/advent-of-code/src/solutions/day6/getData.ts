import { getInput } from '../../utils';

export default (): Array<string> => {
  const rawInput = getInput(`./input/d6p1.txt`);
  return rawInput.split(``);
};
