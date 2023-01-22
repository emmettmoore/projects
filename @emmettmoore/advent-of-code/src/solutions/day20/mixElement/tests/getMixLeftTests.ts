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
      name: `single move left`,
      input: {
        elements: getElements([4, 5, 6, -1, 7, 8, 9]),
        value: -1,
        index: 3,
      },
      output: getElements([4, 5, -1, 6, 7, 8, 9]),
    },
    {
      name: `starts at end and go to start`,
      input: {
        elements: getElements([3, 6, 7, -3]),
        value: -3,
        index: 3,
      },
      output: getElements([-3, 3, 6, 7]),
    },
    {
      name: `starts at index len - 1 and go to end`,
      input: {
        elements: getElements([1, 2, -2, 1]),
        value: -2,
        index: 2,
      },
      output: getElements([-2, 1, 2, 1]),
    },
    {
      name: `starts at end and wrap 1`,
      input: {
        elements: getElements([6, 7, 8, -4]),
        value: -4,
        index: 3,
      },
      output: getElements([6, 7, -4, 8]),
    },
    {
      name: `starts at end and wrap extra`,
      input: {
        elements: getElements([6, 7, 8, -5]),
        value: -5,
        index: 3,
      },
      output: getElements([6, -5, 7, 8]),
    },
    {
      name: `multiple wraps 1`,
      input: {
        elements: getElements([-12, 5, 6, 7]),
        value: -12,
        index: 0,
      },
      output: getElements([-12, 5, 6, 7]),
    },
    {
      name: `multiple wraps 2`,
      input: {
        elements: getElements([-10, 5, 6, 7]),
        value: -10,
        index: 0,
      },
      output: getElements([5, 6, -10, 7]),
    },
    {
      name: `index len -1, multiple cycles (1)`,
      input: {
        elements: getElements([1, 1, 1, -12]),
        value: -12,
        index: 3,
      },
      output: getElements([-12, 1, 1, 1]),
    },
    {
      name: `index 0, multiple cycles (2)`,
      input: {
        elements: getElements([1, 1, 1, -13]),
        value: -13,
        index: 3,
      },
      output: getElements([1, 1, -13, 1]),
    },
  ];
};
