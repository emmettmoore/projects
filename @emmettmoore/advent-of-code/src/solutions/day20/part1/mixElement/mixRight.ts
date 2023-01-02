import { Element } from '../types';

const bubbleRight = (elements: Array<Element>, i: number): void => {
  const [elem] = elements.splice(i, 1);
  elements.splice(i + 1, 0, elem);
};

const replaceRight = (elements: Array<Element>, i: number, v: number): void => {
  const [elem] = elements.splice(i, 1);
  elements.splice(i + v, 0, elem);
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
  let i = index;
  let v = value;
  const cycleStartPosition = 1;

  if (i === cycleStartPosition - 1 && v > 0) {
    // move to cycle position start if not already there
    bubbleRight(elements, i);
    i += 1;
    v -= 1;
  }

  if (v === 0) {
    return elements;
  }

  const cycleLength = elements.length - 1;

  const numToRight = elements.length - 1 - i;
  if (v <= numToRight) {
    replaceRight(elements, i, v);
    return elements;
  }

  if (i !== cycleStartPosition) {
    // move to elem 1 if not already there
    reinsertAfterFirstElement(elements, i);
    i = cycleStartPosition;
    v = v - numToRight - 1;
  }

  const numToMove = v % cycleLength;
  replaceRight(elements, i, numToMove);

  return elements;
};
