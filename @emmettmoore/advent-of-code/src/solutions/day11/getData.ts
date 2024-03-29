// import { getInput } from '../../utils';

export interface Monkey {
  items: Array<number>;
  operation: (oldWorryLevel: number) => number;
  divisor: number;
  testSuccessMonkey: number;
  testFailMonkey: number;
}

export default (): Array<Monkey> => {
  return [
    {
      items: [50, 70, 54, 83, 52, 78],
      operation: (old: number): number => {
        return old * 3;
      },
      divisor: 11,
      testSuccessMonkey: 2,
      testFailMonkey: 7,
    },
    {
      items: [71, 52, 58, 60, 71],
      operation: (old: number): number => {
        return old * old;
      },
      divisor: 7,
      testSuccessMonkey: 0,
      testFailMonkey: 2,
    },
    {
      items: [66, 56, 56, 94, 60, 86, 73],
      operation: (old: number): number => {
        return old + 1;
      },
      divisor: 3,
      testSuccessMonkey: 7,
      testFailMonkey: 5,
    },
    {
      items: [83, 99],
      operation: (old: number): number => {
        return old + 8;
      },
      divisor: 5,
      testSuccessMonkey: 6,
      testFailMonkey: 4,
    },
    {
      items: [98, 98, 79],
      operation: (old: number): number => {
        return old + 3;
      },
      divisor: 17,
      testSuccessMonkey: 1,
      testFailMonkey: 0,
    },
    {
      items: [76],
      operation: (old: number): number => {
        return old + 4;
      },

      divisor: 13,
      testSuccessMonkey: 6,
      testFailMonkey: 3,
    },
    {
      items: [52, 51, 84, 54],
      operation: (old: number): number => {
        return old * 17;
      },
      divisor: 19,
      testSuccessMonkey: 4,
      testFailMonkey: 1,
    },
    {
      items: [82, 86, 91, 79, 94, 92, 59, 94],
      operation: (old: number): number => {
        return old + 7;
      },
      divisor: 2,
      testSuccessMonkey: 5,
      testFailMonkey: 3,
    },
  ];
};
