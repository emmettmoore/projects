import getNumberSectionsFromRawInput from './getNumberSectionsFromRawInput';

describe(`getStringInputSections`, () => {
  it(`one section`, () => {
    expect(getNumberSectionsFromRawInput(`1\n2\n3`)).toEqual([[1, 2, 3]]);
  });
  it(`multiple sections`, () => {
    expect(getNumberSectionsFromRawInput(`1\n2\n3\n\n4\n5\n6\n\n7`)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7],
    ]);
  });
});
