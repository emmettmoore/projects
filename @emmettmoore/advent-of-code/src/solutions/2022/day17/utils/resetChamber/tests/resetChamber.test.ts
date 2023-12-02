import resetChamber from '../resetChamber';

import getTests from './getTests';

describe(`resetChamber`, (): void => {
  getTests().forEach((test) => {
    it(test.name, (): void => {
      expect(resetChamber(test.chamber)).toEqual(test.output);
    });
  });
});
