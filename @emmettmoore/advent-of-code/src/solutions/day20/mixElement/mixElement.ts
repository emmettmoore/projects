import { Element } from '../types';
import mixRight from './mixRight';
import mixLeft from './mixLeft';

export default (
  elements: Array<Element>,
  value: number,
  index: number
): Array<Element> => {
  if (value > 0) {
    return mixRight(elements, value, index);
  }
  if (value < 0) {
    return mixLeft(elements, value, index);
  }

  return elements;
};
