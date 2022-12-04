/* eslint-disable no-console */
import { getAllSolutions } from '../../solutions';
import { stringToAdventDay } from '../../utils';
import { NotImplementedError } from '../../errors';

const run = (problem: string): void => {
  const solutions = getAllSolutions();

  const adventDay = stringToAdventDay(`Day${problem}`);

  if (!adventDay) {
    throw new Error(
      `Usage: npm run solve -w @emmettmoore/advent-of-code --problem=[1-24]`
    );
  }

  const solution = solutions[adventDay];

  let part1: string | number;
  try {
    part1 = solution.part1();
  } catch (err) {
    if (err instanceof NotImplementedError) {
      part1 = `Not implemented`;
    } else {
      throw err;
    }
  }

  let part2: string | number;
  try {
    part2 = solution.part2();
  } catch (err) {
    if (err instanceof NotImplementedError) {
      part2 = `Not implemented`;
    } else {
      throw err;
    }
  }

  console.log(`Advent Day ${problem}`);
  console.log();
  console.log(`Part1: ${part1}`);
  console.log(`Part2: ${part2}`);
};

if (require.main === module) {
  run(process.argv[3]);
}
