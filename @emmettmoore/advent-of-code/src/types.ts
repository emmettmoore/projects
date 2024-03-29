export enum AdventDay {
  Day1 = `Day1`,
  Day2 = `Day2`,
  Day3 = `Day3`,
  Day4 = `Day4`,
  Day5 = `Day5`,
  Day6 = `Day6`,
  Day7 = `Day7`,
  Day8 = `Day8`,
  Day9 = `Day9`,
  Day10 = `Day10`,
  Day11 = `Day11`,
  Day12 = `Day12`,
  Day13 = `Day13`,
  Day14 = `Day14`,
  Day15 = `Day15`,
  Day16 = `Day16`,
  Day17 = `Day17`,
  Day18 = `Day18`,
  Day19 = `Day19`,
  Day20 = `Day20`,
  Day21 = `Day21`,
  Day22 = `Day22`,
  Day23 = `Day23`,
  Day24 = `Day24`,
  Day25 = `Day25`,
}

export interface SolutionDay {
  part1: () => Promise<string> | Promise<number>;
  part2: () => Promise<string> | Promise<number>;
}

export type Solution = {
  [key in AdventDay]: SolutionDay;
};
