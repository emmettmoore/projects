import { getInput, getStringInputSections } from '../../../utils';

export default (): Array<Array<string>> => {
  const rawInput = getInput(`./input/d5p1-moves-only.txt`);
  const data = getStringInputSections(rawInput, ` `);

  return data;
};
