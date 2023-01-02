import { Element } from '../types';
export default (
  elements: Array<Element>,
  value: number,
  index: number
): Array<Element> => {
  const numToLeft = index;

  if (value === 0) {
    return elements;
  }

  let v = (value % elements.length) * -1;

  if (v >= numToLeft) {
    v -= numToLeft;
    const [elem] = elements.splice(index, 1);
    elements.splice(elements.length - v, 0, elem);
  } else {
    const [elem] = elements.splice(index, 1);
    elements.splice(index - v, 0, elem);
  }

  return elements;
};
