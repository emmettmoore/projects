import { getInput, getSectionsFromRawInput } from '../../../utils';

export default (): Array<Array<string>> => {
  const rawInput = getInput(`./input/2023/day1.txt`);
  return getSectionsFromRawInput(rawInput)[0].map((line) => {
    return line.split(``).map((c) => {
      return c;
    });
  });
};
