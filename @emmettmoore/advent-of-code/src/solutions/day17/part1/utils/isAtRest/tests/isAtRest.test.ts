import isAtRest from '../isAtRest';

import getTests from './getTests';

describe(`isAtRest`, (): void => {
  getTests().forEach((test) => {
    it(test.name, (): void => {
      expect(isAtRest(test.chamber)).toEqual(test.output);
    });
  });
});
