import { Element } from '../types';

const bubbleLeft = (elements: Array<Element>, i: number): void => {
  const [elem] = elements.splice(i, 1);
  elements.splice(i - 1, 0, elem);
};

const replaceLeft = (elements: Array<Element>, i: number, v: number): void => {
  const [elem] = elements.splice(i, 1);
  elements.splice(i - v, 0, elem);
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
  let i = index;
  let v = value * -1; // convert to positive number for counting purposes

  const cycleStartPosition = elements.length - 2;

  if (i === cycleStartPosition + 1 && v > 0) {
    // move to cycle position if not already there
    bubbleLeft(elements, i);
    i -= 1;
    v -= 1;
  }

  if (v === 0) {
    return elements;
  }

  const cycleLength = elements.length - 1;

  const numToLeft = i;

  if (v <= numToLeft) {
    replaceLeft(elements, i, v);
    return elements;
  }

  if (i !== cycleStartPosition) {
    reinsertBeforeLastElement(elements, i);
    i = cycleStartPosition;
    v = v - numToLeft - 1;
  }

  const numToMove = v % cycleLength;
  replaceLeft(elements, i, numToMove);

  return elements;
};
