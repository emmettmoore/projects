import getTruncatedChamber from '../getTruncatedChamber';

import getTests from './getTests';

describe(`getTruncatedChamber`, (): void => {
  getTests().forEach((test) => {
    it(test.name, (): void => {
      expect(getTruncatedChamber(test.chamber)).toEqual(test.output);
    });
  });
});
