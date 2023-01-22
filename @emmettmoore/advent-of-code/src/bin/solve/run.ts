/* eslint-disable no-console */
import { getAllSolutions } from '../../solutions';
import { stringToAdventDay } from '../../utils';
import { NotImplementedError } from '../../errors';

const run = async (problem: string): Promise<void> => {
  const solutions = getAllSolutions();

  const adventDay = stringToAdventDay(`Day${problem}`);

  if (!adventDay) {
    throw new Error(
      `Usage: npm run solve -w @emmettmoore/advent-of-code --problem=[1-24]`
    );
  }

  const solution = solutions[adventDay];

  let part1: string | number;
  console.log(`Advent Day ${problem}`);
  try {
    console.time(`Execution Time`);
    part1 = await solution.part1();
    console.log(`Part1: ${part1}`);
    console.timeEnd(`Execution Time`);
  } catch (err) {
    if (err instanceof NotImplementedError) {
      part1 = `Not implemented`;
    } else {
      throw err;
    }
  }
  console.log();

  let part2: string | number;
  try {
    console.time(`Execution Time`);
    part2 = await solution.part2();
    console.log(`Part2: ${part2}`);
    console.timeEnd(`Execution Time`);
  } catch (err) {
    if (err instanceof NotImplementedError) {
      part2 = `Not implemented`;
    } else {
      throw err;
    }
  }
};

if (require.main === module) {
  run(process.argv[3]);
}
