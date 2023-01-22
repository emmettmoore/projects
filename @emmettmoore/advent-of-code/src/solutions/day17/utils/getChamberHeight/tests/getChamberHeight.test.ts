import getChamberHeight from '../getChamberHeight';

import getTests from './getTests';

describe(`getChamberHeight`, (): void => {
  getTests().forEach((test) => {
    it(test.name, (): void => {
      expect(getChamberHeight(test.chamber)).toEqual(test.output);
    });
  });
});
