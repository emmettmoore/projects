import { Element } from '../../types';

import mixElement from '../mixElement';

import getMixRightTests from './getMixRightTests';
import getMixLeftTests from './getMixLeftTests';

const getValues = (elements: Array<Element>): Array<number> => {
  return elements.map(({ value }) => {
    return value;
  });
};

describe(`mixElements`, (): void => {
  describe(`mixRight`, (): void => {
    getMixRightTests().forEach((test) => {
      it(test.name, (): void => {
        const result = mixElement(
          test.input.elements,
          test.input.value,
          test.input.index
        );
        const values = getValues(result);
        expect(values).toEqual(getValues(test.output));
      });
    });
  });
  describe(`mixLeft`, (): void => {
    getMixLeftTests().forEach((test) => {
      it(test.name, (): void => {
        const result = mixElement(
          test.input.elements,
          test.input.value,
          test.input.index
        );
        const values = getValues(result);
        expect(values).toEqual(getValues(test.output));
      });
    });
  });
});
