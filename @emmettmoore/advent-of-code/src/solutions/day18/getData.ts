import { getInput, getStringInputSections } from '../../utils';

export default (): Array<Array<number>> => {
  const rawInput = getInput(`./input/d18p1.txt`);
  const input = getStringInputSections(rawInput, `,`);
  return input.map((row) => {
    return row.map((c) => {
      return parseInt(c, 10);
    });
  });
};
