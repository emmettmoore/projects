import getCycleKey from '../getCycleKey';

import getTests from './getTests';

describe(`getCycleKey`, (): void => {
  getTests().forEach((test) => {
    it(test.name, (): void => {
      expect(
        getCycleKey(test.columnHeights, test.rockIndex, test.directionIndex)
      ).toEqual(test.output);
    });
  });
});
