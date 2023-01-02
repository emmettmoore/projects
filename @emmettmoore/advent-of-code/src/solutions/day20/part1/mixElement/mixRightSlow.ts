import { Element } from '../types';

const bubbleRight = (elements: Array<Element>, i: number): void => {
  const [elem] = elements.splice(i, 1);
  elements.splice(i + 1, 0, elem);
};

const reinsertAfterFirstElement = (
  elements: Array<Element>,
  i: number
): void => {
  const [elem] = elements.splice(i, 1);
  elements.splice(1, 0, elem);
};

export default (
  elements: Array<Element>,
  value: number,
  index: number
): Array<Element> => {
  let v: number = value;
  let i: number = index;

  while (v > 0) {
    if (i < elements.length - 1) {
      bubbleRight(elements, i);
      v = v - 1;
      i = i + 1;
    } else {
      reinsertAfterFirstElement(elements, i);
      v = v - 1;
      i = 1;
    }
  }

  return elements;
};
