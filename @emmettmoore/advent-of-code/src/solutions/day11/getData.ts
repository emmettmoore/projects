// import { getInput } from '../../utils';

export interface Monkey {
  items: Array<number>;
  operation: (oldWorryLevel: number) => number;
  test: (worryLevel: number) => number;
}

export default (): Array<Monkey> => {
  return [
    {
      items: [50, 70, 54, 83, 52, 78],
      operation: (old: number): number => {
        return old * 3;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 11 === 0 ? 2 : 7;
      },
    },
    {
      items: [71, 52, 58, 60, 71],
      operation: (old: number): number => {
        return old * old;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 7 === 0 ? 0 : 2;
      },
    },
    {
      items: [66, 56, 56, 94, 60, 86, 73],
      operation: (old: number): number => {
        return old + 1;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 3 === 0 ? 7 : 5;
      },
    },
    {
      items: [83, 99],
      operation: (old: number): number => {
        return old + 8;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 5 === 0 ? 6 : 4;
      },
    },
    {
      items: [98, 98, 79],
      operation: (old: number): number => {
        return old + 3;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 17 === 0 ? 1 : 0;
      },
    },
    {
      items: [76],
      operation: (old: number): number => {
        return old + 4;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 13 === 0 ? 6 : 3;
      },
    },
    {
      items: [52, 51, 84, 54],
      operation: (old: number): number => {
        return old * 17;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 19 === 0 ? 4 : 1;
      },
    },
    {
      items: [82, 86, 91, 79, 94, 92, 59, 94],
      operation: (old: number): number => {
        return old + 7;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 2 === 0 ? 5 : 3;
      },
    },
  ];
};

/*
export default (): { [key in number]: Monkey } => {
  return {
    [0]: {
      items: [50, 70, 54, 83, 52, 78],
      operation: (old: number): number => {
        return old * 3;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 11 === 0 ? 2 : 7;
      },
    },
    [1]: {
      items: [71, 52, 58, 60, 71],
      operation: (old: number): number => {
        return old * old;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 7 === 0 ? 0 : 2;
      },
    },
    [2]: {
      items: [66, 56, 56, 94, 60, 86, 73],
      operation: (old: number): number => {
        return old + 1;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 3 === 0 ? 7 : 5;
      },
    },
    [3]: {
      items: [83, 99],
      operation: (old: number): number => {
        return old + 8;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 5 === 0 ? 6 : 4;
      },
    },
    [4]: {
      items: [98, 98, 79],
      operation: (old: number): number => {
        return old + 3;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 17 === 0 ? 1 : 0;
      },
    },
    [5]: {
      items: [76],
      operation: (old: number): number => {
        return old + 4;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 13 === 0 ? 6 : 3;
      },
    },
    [6]: {
      items: [52, 51, 84, 54],
      operation: (old: number): number => {
        return old;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 19 === 0 ? 4 : 1;
      },
    },
    [7]: {
      items: [82, 86, 91, 79, 94, 92, 59, 94],
      operation: (old: number): number => {
        return old + 7;
      },
      test: (worryLevel: number): number => {
        return worryLevel % 2 === 0 ? 5 : 3;
      },
    },
  };
};
*/
