import { getInput, getStringInputSections } from '../../../utils';

export default (): Array<Array<number>> => {
  const rawInput = getInput(`./input/d8p1.txt`);

  const data = getStringInputSections(rawInput);

  const allTrees = data.map((line) => {
    const trees = line[0].split(``);
    return trees.map((tree) => {
      return parseInt(tree, 10);
    });
  });

  return allTrees.slice(0, -1); // truncate empty array at end
};
