import { Element } from '../../types';

interface Test {
  name: string;
  input: {
    elements: Array<Element>;
    value: number;
    index: number;
  };
  output: Array<Element>;
}

const getElements = (data: Array<number>): Array<Element> => {
  return data.map((d, i) => {
    return {
      value: d,
      originalIndex: i,
    };
  });
};

export default (): Array<Test> => {
  return [
    {
      name: `single move right`,
      input: {
        elements: getElements([4, 5, 6, 1, 7, 8, 9]),
        value: 1,
        index: 3,
      },
      output: getElements([4, 5, 6, 7, 1, 8, 9]),
    },
    {
      name: `starts at index 0 and go to end`,
      input: {
        elements: getElements([3, 6, 7, 8]),
        value: 3,
        index: 0,
      },
      output: getElements([6, 7, 8, 3]),
    },
    {
      name: `starts at index 1 and go to end`,
      input: {
        elements: getElements([1, 2, 1, 1]),
        value: 2,
        index: 1,
      },
      output: getElements([1, 1, 1, 2]),
    },
    {
      name: `starts at and and stay at end`,
      input: {
        elements: getElements([1, 1, 1, 0]),
        value: 0,
        index: 3,
      },
      output: getElements([1, 1, 1, 0]),
    },
    {
      name: `starts at index 0 and wrap 1`,
      input: {
        elements: getElements([4, 6, 7, 8]),
        value: 4,
        index: 0,
      },
      //                  [4, 6, 7, 8]),
      output: getElements([6, 4, 7, 8]),
    },
    {
      name: `starts at index 0 and wrap extra`,
      input: {
        elements: getElements([5, 6, 7, 8]),
        value: 5,
        index: 0,
      },
      output: getElements([6, 7, 5, 8]),
    },
    {
      name: `multiple wraps 1`,
      input: {
        elements: getElements([5, 6, 7, 12]),
        value: 12,
        index: 3,
      },
      output: getElements([5, 6, 7, 12]),
    },
    {
      name: `multiple wraps 2`,
      input: {
        elements: getElements([5, 6, 7, 10]),
        value: 10,
        index: 3,
      },
      output: getElements([5, 10, 6, 7]),
    },
    {
      name: `index 0, multiple cycles (1)`,
      input: {
        elements: getElements([12, 1, 1, 1]),
        value: 12,
        index: 0,
      },
      output: getElements([1, 1, 1, 12]),
    },
    {
      name: `index 0, multiple cycles (2)`,
      input: {
        elements: getElements([13, 1, 1, 1]),
        value: 13,
        index: 0,
      },
      output: getElements([1, 13, 1, 1]),
    },
  ];
};
