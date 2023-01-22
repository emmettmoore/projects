import { Element } from '../types';

const bubbleLeft = (elements: Array<Element>, i: number): void => {
  const [elem] = elements.splice(i, 1);
  elements.splice(i - 1, 0, elem);
};

const reinsertBeforeLastElement = (
  elements: Array<Element>,
  i: number
): void => {
  const [elem] = elements.splice(i, 1);
  elements.splice(elements.length - 1, 0, elem);
};

export default (
  elements: Array<Element>,
  value: number,
  index: number
): Array<Element> => {
  let v: number = value;
  let i: number = index;

  while (v < 0) {
    if (i > 0) {
      bubbleLeft(elements, i);
      v = v + 1;
      i = i - 1;
    } else {
      reinsertBeforeLastElement(elements, i);
      v = v + 1;
      i = elements.length - 2;
    }
  }

  return elements;
};
