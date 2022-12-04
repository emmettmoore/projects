import getStringInputSections from './getStringInputSections';

describe(`getStringInputSections`, () => {
  it(`no separator`, () => {
    expect(getStringInputSections(`A Y\nB Z\nC X`)).toEqual([
      [`A Y`],
      [`B Z`],
      [`C X`],
    ]);
  });
  it(`space separator`, () => {
    expect(getStringInputSections(`A Y\nB Z\nC X`, ` `)).toEqual([
      [`A`, `Y`],
      [`B`, `Z`],
      [`C`, `X`],
    ]);
  });
  it(`dash separator`, () => {
    expect(getStringInputSections(`A-Y\nB-Z\nC-X`, `-`)).toEqual([
      [`A`, `Y`],
      [`B`, `Z`],
      [`C`, `X`],
    ]);
  });
});
