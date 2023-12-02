import addExtraSpaceToChamber from '../addExtraSpaceToChamber';

import getTests from './getTests';

describe(`addExtraSpaceToChamber`, (): void => {
  getTests().forEach((test) => {
    it(test.name, (): void => {
      expect(addExtraSpaceToChamber(test.chamber)).toEqual(test.output);
    });
  });
});
