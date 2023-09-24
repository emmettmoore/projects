import hexToRgba from './hexToRgba';

describe(`hexToRgba`, (): void => {
  it(`converts hex to rgba`, (): void => {
    expect(hexToRgba('#7f11e0')).toEqual([127, 17, 224]);
  });
  it(`converts secondary orange light to rgba`, (): void => {
    expect(hexToRgba('#FF9900')).toEqual([255, 153, 0]);
  });
});
