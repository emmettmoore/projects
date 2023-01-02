import { Solution, AdventDay } from '../types';

import getNotImplementedSolution from './getNotImplementedSolution';
import day1 from './day1';
import day2 from './day2';
import day3 from './day3';
import day4 from './day4';
import day5 from './day5';
import day6 from './day6';
import day7 from './day7';
import day8 from './day8';
import day9 from './day9';
import day10 from './day10';
import day11 from './day11';
import day12 from './day12';
import day13 from './day13';
import day14 from './day14';
import day15 from './day15';
import day16 from './day16';
import day17 from './day17';
import day18 from './day18';
import day20 from './day20';

export default (): Solution => {
  return {
    [AdventDay.Day1]: day1,
    [AdventDay.Day2]: day2,
    [AdventDay.Day3]: day3,
    [AdventDay.Day4]: day4,
    [AdventDay.Day5]: day5,
    [AdventDay.Day6]: day6,
    [AdventDay.Day7]: day7,
    [AdventDay.Day8]: day8,
    [AdventDay.Day9]: day9,
    [AdventDay.Day10]: day10,
    [AdventDay.Day11]: day11,
    [AdventDay.Day12]: day12,
    [AdventDay.Day13]: day13,
    [AdventDay.Day14]: day14,
    [AdventDay.Day15]: day15,
    [AdventDay.Day16]: day16,
    [AdventDay.Day17]: day17,
    [AdventDay.Day18]: day18,
    [AdventDay.Day19]: getNotImplementedSolution(),
    [AdventDay.Day20]: day20,
    [AdventDay.Day21]: getNotImplementedSolution(),
    [AdventDay.Day22]: getNotImplementedSolution(),
    [AdventDay.Day23]: getNotImplementedSolution(),
    [AdventDay.Day24]: getNotImplementedSolution(),
  };
};
