import { Solution, AdventDay } from '../types';

import getNotImplementedSolution from './getNotImplementedSolution';
import day1 from './day1';
import day2 from './day2';
import day3 from './day3';
import day4 from './day4';
import day5 from './day5';
import day6 from './day6';

export default (): Solution => {
  return {
    [AdventDay.Day1]: day1,
    [AdventDay.Day2]: day2,
    [AdventDay.Day3]: day3,
    [AdventDay.Day4]: day4,
    [AdventDay.Day5]: day5,
    [AdventDay.Day6]: day6,
    [AdventDay.Day7]: getNotImplementedSolution(),
    [AdventDay.Day8]: getNotImplementedSolution(),
    [AdventDay.Day9]: getNotImplementedSolution(),
    [AdventDay.Day11]: getNotImplementedSolution(),
    [AdventDay.Day12]: getNotImplementedSolution(),
    [AdventDay.Day13]: getNotImplementedSolution(),
    [AdventDay.Day14]: getNotImplementedSolution(),
    [AdventDay.Day15]: getNotImplementedSolution(),
    [AdventDay.Day16]: getNotImplementedSolution(),
    [AdventDay.Day17]: getNotImplementedSolution(),
    [AdventDay.Day18]: getNotImplementedSolution(),
    [AdventDay.Day19]: getNotImplementedSolution(),
    [AdventDay.Day20]: getNotImplementedSolution(),
    [AdventDay.Day21]: getNotImplementedSolution(),
    [AdventDay.Day22]: getNotImplementedSolution(),
    [AdventDay.Day23]: getNotImplementedSolution(),
    [AdventDay.Day24]: getNotImplementedSolution(),
  };
};
