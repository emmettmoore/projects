import getColumnHeights from '../getColumnHeights';

import getTests from './getTests';

describe(`getColumnHeights`, (): void => {
  getTests().forEach((test) => {
    it(test.name, (): void => {
      expect(getColumnHeights(test.chamber)).toEqual(test.output);
    });
  });
});
